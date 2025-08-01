const componentStores = new Map();
const registeredComponents = new Map();
const activeComponentInstances = new Set();

function getRegisteredComponents(componentName) {
    return registeredComponents.get(componentName);
}

function reactive(data, callback = false) {
    let dependencySet = new Set();
    if (callback) {
        dependencySet.add(callback);
    }

    const proxyHandler = {
        set: (target, property, value) => {
            if (target[property] !== value) {
                target[property] = value;
                dependencySet.forEach(effect => effect(property, value));
        
                if (Array.isArray(target) && property !== 'items' && property !== 'length') {
                    dependencySet.forEach(effect => effect('items', target));
                }
            }
            return true;
        },
        get(target, property) {
            if (property === "subscribe") {
                return (effect) => {
                    dependencySet.add(effect);
                    return () => dependencySet.delete(effect);
                };
            }

            const value = target[property];
            if (Array.isArray(target) && typeof value === 'function') {
                const methodsToWrap = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'];
                if (methodsToWrap.includes(property)) {
                    return function(...args) {
                        const result = value.apply(target, args);
                        dependencySet.forEach(effect => effect('length', target.length));
                        dependencySet.forEach(effect => effect('items', target));
                        return result;
                    };
                }
            }
            return value;
        }
    };

    return new Proxy(data, proxyHandler);
}

function createComponent(name, {
    template,
    state,
    actions,
    onMount,
    onDestroy
}) {
    let compiledTemplate = typeof template === "string" ? compileTemplate(template) : template;
    registeredComponents.set(name, {
        template: compiledTemplate,
        state: state || (() => ({})),
        actions: actions || {},
        onMount: onMount,
        onDestroy: onDestroy
    });
    return registeredComponents.get(name);
}

function evalInContext(expression, context) {
    try {
        let keys = Object.keys(context);
        let values = Object.values(context);
        let evaluationFunction = new Function(...keys, `return ${expression}`);
        let result = evaluationFunction(...values);
        return result;
    } catch (error) {
        console.error(`Error evaluating expression: "${expression}"`, error);
        return;
    }
}

function mountComponent(componentName, targetElementId, props = {}) {
    let targetElement = document.getElementById(targetElementId);
    if (!targetElement) {
        console.error(`Target element with id "${targetElementId}" not found.`);
        return null;
    }

    let componentDefinition = registeredComponents.get(componentName);
    if (!componentDefinition) {
        console.error(`Component "${componentName}" not found.`);
        return null;
    }

    let componentState = reactive(componentDefinition.state(props));

    let modelListeners = new Map();
    let nestedComponentInstances = new Map();
    let isUpdating = false;

    const slotContent = new Map();
    targetElement.querySelectorAll('[data-slot]').forEach(slotElement => {
        const slotName = slotElement.getAttribute('data-slot');
        if (slotName) {
            const content = document.createDocumentFragment();
            while (slotElement.firstChild) {
                content.appendChild(slotElement.firstChild);
            }
            slotContent.set(slotName, content);
            slotElement.parentNode.removeChild(slotElement);
        } else {
            console.warn(`Element with data-slot has no slot name:`, slotElement);
        }
    });

    let stateSubscription;

    function getExpressionDependencies(expression) {
        const reserved = new Set(['true', 'false', 'null', 'undefined', 'this']);
        return [...new Set((expression.match(/[a-zA-Z_$][a-zA-Z0-9_$]*/g) || [])
            .filter(dep => !reserved.has(dep)))];
    }

    function renderRepeatElements(repeatElement, context, componentActions) {
        let repeatExpression = repeatElement.getAttribute("data-repeat");
        let repeatData = evalInContext(repeatExpression, {
            ...context,
            ...componentActions
        });
        let parentElement = repeatElement.parentNode;
        let nextSibling = repeatElement.nextElementSibling;

        while (nextSibling) {
            let currentSibling = nextSibling;
            nextSibling = currentSibling.nextElementSibling;
            if (currentSibling && currentSibling.hasAttribute("data-repeated-item")) {
                parentElement.removeChild(currentSibling);
            } else {
                break;
            }
        }

        let fragment = document.createDocumentFragment();
        let templateElement = repeatElement.firstElementChild;

        if (!templateElement) {
            console.warn(`data-repeat element "[data-repeat="${repeatExpression}"]" has no child element to use as a template.`);
            repeatElement.style.display = "none";
            return;
        }

        if (Array.isArray(repeatData)) {
            repeatData.forEach((item, index) => {
                let repeatedItemElement = templateElement.cloneNode(true);
                repeatedItemElement.setAttribute("data-repeated-item", "");

                repeatedItemElement.querySelectorAll("[data-repeat-if]").forEach(ifElement => {
                    let ifExpression = ifElement.getAttribute("data-repeat-if");
                    let dependencies = getExpressionDependencies(ifExpression);

                    let showElement = evalInContext(ifExpression, {
                        ...context,
                        ...componentActions,
                        item: item,
                        index: index
                    });
                    ifElement.style.display = showElement ? "" : "none";
                    if (dependencies.includes("item")) {
                        showElement = evalInContext(ifExpression, {
                            ...context,
                            ...componentActions,
                            item: item,
                            index: index
                        });
                        ifElement.style.display = showElement ? "" : "none";
                    }

                });

                repeatedItemElement.querySelectorAll('*').forEach(el => {
                    Array.from(el.attributes)
                        .filter(attr => attr.name.startsWith('data-repeat-bind-html-'))
                        .forEach(attr => {
                            const htmlAttr = attr.name.replace('data-repeat-bind-html-', '');
                            const expression = attr.value;
                            const value = evalInContext(expression, { ...context, item, index });

                            if (value !== undefined && value !== null) {
                                el.setAttribute(htmlAttr, value);
                            }
                            el.removeAttribute(attr.name);
                        });
                });

                Array.from(repeatedItemElement.querySelectorAll('[data-repeat-bind]')).forEach(el => {
                    const textBinding = el.getAttribute('data-repeat-bind');
                    if (textBinding) {
                        const value = evalInContext(textBinding, { ...context, item, index });
                        if (value !== undefined) {
                            el.textContent = value;
                        }
                    }

                    Array.from(el.attributes).forEach(attr => {
                        if (attr.name.startsWith('data-repeat-bind:')) {
                            const attributeName = attr.name.split(':')[1];
                            const expression = attr.value;
                            const value = evalInContext(expression, { ...context, item, index });

                            if (value !== undefined) {
                                el.setAttribute(attributeName, value);
                            }

                        }
                    });
                });

                repeatedItemElement.querySelectorAll("[data-repeat-action]").forEach(actionElement => {
                    let actionName = actionElement.getAttribute("data-repeat-action");
                    if (componentActions[actionName]) {
                        let eventListener = (event) => {
                            event.preventDefault();
                            componentActions[actionName]({
                                state: context,
                                event: event,
                                item: item,
                                index: index
                            });
                        };
                        actionElement.addEventListener("click", eventListener);
                        actionElement._actionListener = eventListener;
                    } else {
                        console.warn(`Action "${actionName}" not found for data-repeat-action`);
                    }
                });

                fragment.appendChild(repeatedItemElement);
            });
        } else {
            console.warn(`data-repeat expression "${repeatExpression}" did not evaluate to an array. Result:`, repeatData);
        }
        parentElement.insertBefore(fragment, repeatElement.nextSibling);
        repeatElement.style.display = "none";
    }

    function updateView(changedProperties = []) {
        
        if (isUpdating || !targetElement) {
            return;
        }
        isUpdating = true;
        requestAnimationFrame(() => {
 
            
            try {
             
                if (changedProperties.length === 0) {
                    modelListeners.forEach(({
                        listener,
                        eventType
                    }, element) => {
                        if (element && listener) {
                            element.removeEventListener(eventType, listener);
                        }
                    });
                    modelListeners.clear();

                    targetElement.querySelectorAll("[data-action]").forEach(actionElement => {
                        
                        if (actionElement._actionListener) {
                            let eventType = actionElement.tagName === "FORM" ? "submit" : "click";
                            actionElement.removeEventListener(eventType, actionElement._actionListener);
                            delete actionElement._actionListener;
                        }
                    });

                    nestedComponentInstances.forEach((instance, element) => {
                        try {
                            instance.destroy();
                        } catch (error) {
                            console.error("Error destroying nested component during update:", error);
                        }
                        if (element) {
                            delete element._componentInstance;
                        }
                    });
                    nestedComponentInstances.clear();

                    let renderedTemplate = componentDefinition.template({
                        ...componentState,
                        ...componentDefinition.actions
                    });

                    if (typeof renderedTemplate === "string") {
                        targetElement.innerHTML = renderedTemplate;

                        slotContent.forEach((content, slotName) => {
                            const slotOutlet = targetElement.querySelector(`[data-slot-outlet="${slotName}"]`);
                            if (slotOutlet) {
                                while (slotOutlet.firstChild) {
                                    slotOutlet.removeChild(slotOutlet.firstChild);
                                }
                                slotOutlet.appendChild(content.cloneNode(true));
                            } else {
                                console.warn(`Slot outlet with name "${slotName}" not found in component template.`);
                            }
                        });
                        targetElement.querySelectorAll("[data-if]").forEach(ifElement => {
                            let ifExpression = ifElement.getAttribute("data-if");
                            let showElement = evalInContext(ifExpression, {
                                ...componentState,
                                ...componentDefinition.actions
                            });
                            ifElement.style.display = showElement ? "" : "none";
                        });

                        targetElement.querySelectorAll("[data-else]").forEach(elseElement => {
                            let elseExpression = elseElement.getAttribute("data-else");
                            let showElement = evalInContext(elseExpression, {
                                ...componentState,
                                ...componentDefinition.actions
                            });
                            elseElement.style.display = showElement ? "none" : "";
                        });

                        targetElement.querySelectorAll("[data-repeat]").forEach(repeatElement => {
                            renderRepeatElements(repeatElement, componentState, componentDefinition.actions);
                        });

                        targetElement.querySelectorAll("[data-component]").forEach(nestedComponentElement => {
                            let elementId = nestedComponentElement.id || (() => {
                                let id = "lila-" + Math.random().toString(36).substr(2, 9);
                                while (document.getElementById(id)) {
                                    id = "lila-" + Math.random().toString(36).substr(2, 9);
                                }
                                nestedComponentElement.id = id;
                                return id;
                            })();
                            nestedComponentElement.id = elementId;

                            if (!nestedComponentElement._componentInstance) {
                                let nestedComponentName = nestedComponentElement.dataset.component;

                                const wrappedParentActions = {};
                              
                                for (const actionName in componentDefinition.actions) {
                                    if (typeof componentDefinition.actions[actionName] === 'function') {
                                        wrappedParentActions[actionName] = (...args) => {
                                           
                                            return componentDefinition.actions[actionName]({
                                                state: componentState,
                                                actions: componentDefinition.actions,
                                                ...args[0] 
                                            });
                                        };
                                    }
                                }   

                                if (nestedComponentElement.dataset.class) {
                                    let merge_class = nestedComponentElement.dataset.class.split(' ');
                                    nestedComponentElement.classList.add(...merge_class);
                                }

                                const nestedProps = {
                                    ...evalInContext(nestedComponentElement.dataset.props || '{}', {
                                        ...componentState, 
                                        ...componentDefinition.actions 
                                    }),
                                    _parentActions: wrappedParentActions ,
                                    _parentState: componentState
                                };
                            
                                let nestedInstance = mountComponent(nestedComponentName, elementId, nestedProps);


                                if (nestedInstance) {
                                    nestedComponentInstances.set(nestedComponentElement, nestedInstance);
                                    nestedComponentElement._componentInstance = nestedInstance;
                                }
                            }
                        });

                        targetElement.querySelectorAll("[data-action]").forEach(actionElement => {
                            
                            let actionName = actionElement.dataset.action;
                            if (componentDefinition.actions[actionName] && !actionElement._actionListener) {
                                
                                let eventListener = (event) => {
                                    if (actionElement.tagName === "FORM") {
                                        event.preventDefault();
                                    }
                                    componentDefinition.actions[actionName]({
                                        state: componentState,
                                        event: event
                                    });
                                };
                                let eventType = actionElement.tagName === "FORM" ? "submit" : "click";
                                actionElement.addEventListener(eventType, eventListener);
                                actionElement._actionListener = eventListener;
                               
                            } else if (!componentDefinition.actions[actionName]) {
                                console.warn(`Action "${actionName}" not found for data-action`);
                            }
                        });

                        targetElement.querySelectorAll("[data-model]").forEach(modelElement => {
                            let modelProperty = modelElement.getAttribute("data-model");
                            if (componentState[modelProperty] !== undefined) {
                                if (modelElement.type === "checkbox" || modelElement.type === "radio") {
                                    modelElement.checked = componentState[modelProperty];
                                } else {
                                    modelElement.value = componentState[modelProperty];
                                }
                            }
                            if (!modelListeners.has(modelElement)) {
                                let eventType = modelElement.type === "checkbox" || modelElement.type === "radio" ? "change" : "input";
                                let eventListener = (event) => {
                                    if (!isUpdating) {
                                        if (modelElement.type === "checkbox") {
                                            componentState[modelProperty] = event.target.checked;
                                        } else if (modelElement.type === "radio") {
                                            if (event.target.checked) {
                                                componentState[modelProperty] = event.target.value;
                                            }
                                        } else {
                                            componentState[modelProperty] = event.target.value;
                                        }
                                    }
                                };
                                modelElement.addEventListener(eventType, eventListener);
                                modelListeners.set(modelElement, {
                                    property: modelProperty,
                                    listener: eventListener,
                                    eventType: eventType
                                });
                            }
                        });

                        targetElement.querySelectorAll("[data-bind]").forEach(bindElement => {
                            let bindProperty = bindElement.getAttribute("data-bind");
                            if (componentState[bindProperty] !== undefined) {
                                bindElement.textContent = componentState[bindProperty];
                            }
                        });

                    } else {
                        console.error("Component template did not return a string.");
                    }

                } else { 
                    changedProperties.forEach(changedProperty => {
                        targetElement.querySelectorAll(`[data-bind="${changedProperty}"]`).forEach(bindElement => {
                            if (componentState[changedProperty] !== undefined) {
                                bindElement.textContent = componentState[changedProperty];
                            }
                        });

                        targetElement.querySelectorAll(`[data-model="${changedProperty}"]`).forEach(modelElement => {
                            if (modelElement !== document.activeElement && componentState[changedProperty] !== undefined) {
                                if (modelElement.type === "checkbox" || modelElement.type === "radio") {
                                    if (modelElement.checked !== componentState[changedProperty]) {
                                        modelElement.checked = componentState[changedProperty];
                                    }
                                } else {
                                    if (modelElement.value !== componentState[changedProperty]) {
                                        modelElement.value = componentState[changedProperty];
                                    }
                                }
                            }
                        });

                        targetElement.querySelectorAll("[data-if]").forEach(ifElement => {
                            let ifExpression = ifElement.getAttribute("data-if");
                            let dependencies = getExpressionDependencies(ifExpression);
                            if (dependencies.includes(changedProperty)) {
                                let showElement = evalInContext(ifExpression, {
                                    ...componentState,
                                    ...componentDefinition.actions
                                });
                                ifElement.style.display = showElement ? "" : "none";
                            }
                        });

                        targetElement.querySelectorAll("[data-else]").forEach(elseElement => {
                            let elseExpression = elseElement.getAttribute("data-else");
                            let dependencies = getExpressionDependencies(elseExpression);
                            if (dependencies.includes(changedProperty)) {
                                let showElement = evalInContext(elseExpression, {
                                    ...componentState,
                                    ...componentDefinition.actions
                                });
                                elseElement.style.display = showElement ? "none" : "";
                            }
                        });

                        targetElement.querySelectorAll("[data-repeat]").forEach(repeatElement => {
                            let repeatExpression = repeatElement.getAttribute("data-repeat");
                            let dependencies = getExpressionDependencies(repeatExpression);
                        
                            let shouldRender = dependencies.some(dep =>
                                changedProperty === dep ||
                                changedProperty === 'items' ||
                                changedProperty.startsWith(dep + '.')
                            );
                        
                            if (dependencies.length > 0 && changedProperty === dependencies[0] && Array.isArray(componentState[changedProperty])) {
                                 shouldRender = true;
                            }
                        
                            if (shouldRender) {
                                renderRepeatElements(repeatElement, componentState, componentDefinition.actions);
                            }
                        });
                        


                    });
                }
            } catch (error) {
                console.error("Error during update:", error);
            } finally {
                isUpdating = false;
            }
        });
    }
    setTimeout(() => {
        updateView();
        if (componentDefinition.onMount) {
            try {
                let onMountResult = componentDefinition.onMount(componentState);
                if (onMountResult && typeof onMountResult.then === "function") {
                    onMountResult.then(() => {
                        updateView(); 
                        stateSubscription = componentState.subscribe(property => {
                            updateView([property]);
                        });
                    }).catch(error => console.error("Error in onMount promise:", error));
                } else {
                    updateView(); 
                    stateSubscription = componentState.subscribe(property => {
                        updateView([property]);
                    });
                }
            } catch (error) {
                console.error("Error in onMount:", error);
                stateSubscription = componentState.subscribe(property => {
                    updateView([property]);
                });
            }
        } else {
             updateView(); 
             stateSubscription = componentState.subscribe(property => {
                updateView([property]);
            });
        }
    }, 0);



    let componentInstance = {
        destroy() {
            try {
                if (componentDefinition.onDestroy) {
                    componentDefinition.onDestroy(componentState);
                }
            } catch (error) {
                console.error("Error in onDestroy:", error);
            }

            nestedComponentInstances.forEach((instance, element) => {
                try {
                    instance.destroy();
                    if (element) {
                        delete element._componentInstance;
                    }
                } catch (error) {
                    console.error("Error destroying nested component:", error);
                }
            });
            nestedComponentInstances.clear();

            if (stateSubscription) {
                stateSubscription();
            }

            modelListeners.forEach(({
                listener,
                eventType
            }, element) => {
                if (element && listener) {
                    element.removeEventListener(eventType, listener);
                }
            });
            modelListeners.clear();

            if (targetElement) {
                targetElement.querySelectorAll("[data-action]").forEach(actionElement => {
                    if (actionElement._actionListener) {
                        let eventType = actionElement.tagName === "FORM" ? "submit" : "click";
                        actionElement.removeEventListener(eventType, actionElement._actionListener);
                        delete actionElement._actionListener;
                    }
                });
                targetElement.innerHTML = "";
            }
        },
        state: componentState,
        forceUpdate() {
            updateView();
        }
    };

    activeComponentInstances.add(componentInstance);

    return componentInstance;
}

function handleRouting() {
    let currentHash = window.location.hash.substring(1) || "/";
    let targetRoute = routes.get(currentHash) || routes.get("*");

    if (!targetRoute) {
        console.warn(`No route found for path: "${currentHash}"`);
        return;
    }

    activeComponentInstances.forEach(instance => {
        try {
            instance.destroy();
        } catch (error) {
            console.error("Error destroying instance during routing:", error);
        }
    });
    activeComponentInstances.clear();

    let appOutletElement = document.getElementById("app-lila");
    if (appOutletElement) {
        mountComponent(targetRoute.componentName, "app-lila", targetRoute.props);
    } else {
        console.error('App outlet element with id "app-lila" not found.');
    }
}

const routes = new Map();

function addRoute(path, componentName, props = {}) {
    routes.set(path, {
        componentName: componentName,
        props: props
    });
}

function navigateTo(path) {
    if (window.location.hash.substring(1) !== path) {
        window.location.hash = path;
    }
}

function compileTemplate(templateId) {
    let templateElement = document.querySelector(`[data-template="${templateId}"]`);
    if (!templateElement) {
        console.error(`Template element with data-template="${templateId}" not found.`);
        return () => "";
    }

    let templateHTML = templateElement.innerHTML;
    return (context) => templateHTML.replace(/\${([^}]+)}/g, (match, expression) => {
        try {
            return evalInContext(expression.trim(), context);
        } catch (error) {
            return console.error(`Error evaluating template expression: "${expression}"`, error), `Error: ${expression}`;
        }
    });
}

window.addEventListener("hashchange", handleRouting);
window.addEventListener("load", handleRouting);
document.addEventListener("click", event => {
    let linkElement = event.target.closest("[data-link]");
    if (linkElement) {
        event.preventDefault();
        let href = linkElement.getAttribute("href");
        if (href) {
            navigateTo(href);
        }
    }
});

window.App = {
    reactive,
    createComponent,
    addRoute,
    navigateTo,
    mountComponent,
    getComponents: getRegisteredComponents,
    evalInContext,
};

 
