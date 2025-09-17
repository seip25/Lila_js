const App = {
  routes: {},
  root: null,

  createComponent(name, options) {
    class CustomComponent extends HTMLElement {
      constructor() {
        super();
        this.props = {};
        this.state = {};
        this._children = this.innerHTML;
        this._bindings = new Map();
        this.exposeActions(options.actions);
        this._delegatedEventHandler = this.handleDelegatedEvent.bind(this);
      }

      exposeActions(actions) {
        if (actions) {
          Object.keys(actions).forEach(actionName => {
            this[actionName] = actions[actionName].bind(this);
          });
        }
      }

      connectedCallback() {
        this.props = this.getProps();
        if (options.state) this.state = options.state(this.props);

        this.render().then(() => {
          if (options.onMount) options.onMount.call(this);
          this.setupModelBindings();
          this.cacheBoundElements();
          this.exposeActions(options.actions);
          if (options.onUpdate) options.onUpdate.call(this);

          this.addEventListener("click", this._delegatedEventHandler);
          this.addEventListener("input", this._delegatedEventHandler);
          this.addEventListener("change", this._delegatedEventHandler);
          this.addEventListener("mouseover", this._delegatedEventHandler);
        });
      }

      handleDelegatedEvent(e) {
        let el = e.target;
        while (el && el !== this) {
          for (const attr of el.attributes) {
            if (attr.name.startsWith("data-on:")) {
              const eventType = attr.name.split(":")[1];
              if (eventType === e.type) {
                const actionName = attr.value;
                if (this[actionName]) {
                  this[actionName](e);
                  return;
                }
              }
            }
          }
          el = el.parentElement;
        }
      }

      disconnectedCallback() {
        if (options.onDestroy) options.onDestroy.call(this);
        this.removeEventListener("click", this._delegatedEventHandler);
        this.removeEventListener("input", this._delegatedEventHandler);
        this.removeEventListener("change", this._delegatedEventHandler);
        this.removeEventListener("mouseover", this._delegatedEventHandler);
      }

      cacheBoundElements() {
        this._bindings.clear();
        this.querySelectorAll("[data-bind]").forEach(el => {
          const key = el.getAttribute("data-bind");
          if (!this._bindings.has(key)) {
            this._bindings.set(key, []);
          }
          this._bindings.get(key).push(el);
        });
      }

      getProps() {
        const props = {};
        for (const attr of this.attributes) {
          props[attr.name] = attr.value;
        }
        return props;
      }

      setState(newState, render = true, key_render = null) {
        const oldState = { ...this.state };
        this.state = { ...this.state, ...newState };
        if (render) this.render();
      }

      emit(eventName, detail = {}) {
        this.dispatchEvent(new CustomEvent(eventName, { bubbles: true, detail }));
      }

      setupModelBindings() {
        if (this.props['data-model']) {
          this.addEventListener('modelChange', e => {
            if (e.detail.model === this.props['data-model']) {
              this.updateParentState(e.detail.value);
            }
          });
        }
      }

      updateParentState(value) {
        let parent = this.parentElement;
        while (parent) {
          if (parent.tagName.includes('-') && parent.setState && parent.props) {
            const modelKey = this.props['data-model'];
            if (modelKey) parent.setState({ [modelKey]: value }, false);
            break;
          }
          parent = parent.parentElement;
        }
      }

      render(key_render = null) {
        this.innerHTML = this.getTemplateContent();
        this.querySelectorAll("[data-for]").forEach(el => {
          const expression = el.getAttribute("data-for");
          const listName = expression.replace("item in ", "").trim();
          this.renderDataForList(el, listName);
        });
        this.querySelectorAll("[data-model]").forEach(el => {
          const key = el.getAttribute("data-model");
          el.value = this.state[key] ?? '';
          el.oninput = e => {
            this.state[key] = e.target.value;
            this.querySelectorAll(`[data-bind="${key}"]`).forEach(bindEl => {
              bindEl.textContent = this.state[key];
            });
          };
        });
        this.cacheBoundElements();
        return Promise.resolve();
      }

      renderDataForList(el, listName) {
        const items = this.state[listName] || [];
        if (!el._originalTemplate) el._originalTemplate = el.innerHTML;
        const template = el._originalTemplate;
        el.innerHTML = items.map((item, index) => {
          const itemId = item.id ?? index;
          const key = `${listName}-${itemId}`;
          return template
            .replace(/\${item}/g, item)
            .replace(/\${index}/g, index)
            .replace(/\${key}/g, key)
            .replace(/\${itemId}/g, itemId);
        }).join("");
      }

      getTemplateContent() {
        let templateWithData = options.template || '';

        templateWithData = templateWithData.replace(
          /<([a-zA-Z0-9-]+)([^>]*?)\s+data-if="([^"]+)"([^>]*?)>([\s\S]*?)<\/\1>/g,
          (match, tag, attrsBefore, condition, attrsAfter, content) => {
            if (this.state[condition]) {
              return `<${tag}${attrsBefore}${attrsAfter}>${content}</${tag}>`;
            } else {
              return '';
            }
          }
        );

        templateWithData = templateWithData.replace(/\${props\.(\w+)}/g, (m, p) => this.props[p] || this.getAttribute(p) || '');
        templateWithData = templateWithData.replace(/\${state\.(\w+)}/g, (m, s) => this.state[s] || '');
        templateWithData = templateWithData.replace(/<slot><\/slot>/g, this._children);
        return templateWithData;
      }
    }

    customElements.define(name, CustomComponent);
  },

  mount(rootId) {
    this.root = document.getElementById(rootId);
    if (!this.root) return;
    if (!window.location.hash) window.location.hash = "/";
    window.addEventListener("hashchange", () => this.navigate(window.location.hash.slice(1) || "/"));
    this.navigate(window.location.hash.slice(1) || "/");
  },

  defineRoute(path, componentFn) {
    this.routes[path] = componentFn;
  },

  navigate(path) {
    if (!this.root) return;
    if (window.location.hash.slice(1) !== path) window.location.hash = path;
    const view = this.routes[path];
    if (view) {
      this.root.innerHTML = view();
    } else {
      if (path !== "/") this.navigate("/");
      else this.root.innerHTML = "<h1>404 - Página no encontrada</h1>";
    }
  }
};
