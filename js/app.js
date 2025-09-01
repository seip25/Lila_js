const i18n = {
    en: {
        home: "Home",
        documentation: "Documentation",
        examples: "Examples",
        welcome: "Welcome to Lila JS",
        description: "The minimalist JavaScript library for building reactive web components with ease.",
        why: "Why Lila JS?",
        zero_dependencies: "Zero Dependencies: Just a single script file, nothing else to install.",
        web_components: "Web Components: Build encapsulated and reusable components.",
        simple_reactive: "Simple & Reactive: State management is simple and the UI updates automatically.",
        lightweight: "Lightweight: Tiny footprint, ideal for performance-critical applications.",
        get_started: "Get Started",
        get_started_text: "Include Lila JS in your project with a single script tag:",
        get_started_code: "&lt;script src=\"lila.js\"&gt;&lt;/script&gt;",
        get_started_then: "Then, start building your components!",
        features: "Key Advantages of <b>Lila JS</b> as a Micro-Framework",
        ultra_compact_core: "🚀 <b>Ultra-Compact Core</b>",
        ultra_compact_core_text: "Complete reactive system, routing and components in <b>under 10kb</b>. No bloatware or hidden dependencies.",
        precise_reactivity: "💡 <b>Precise Reactivity</b>",
        precise_reactivity_text: "<b>Granular update system</b> that only modifies what's needed in the DOM using <b>native Proxy</b>.",
        self_contained_components: "🧩 <b>Self-Contained Components</b>",
        self_contained_components_text: "Each component manages its own <b>reactive state</b>, <b>lifecycle</b> and <b>scoped template</b>.",
        declarative_binding: "🔄 <b>Declarative Binding</b>",
        declarative_binding_text: "Bind data with <b>simple HTML attributes</b> (<code>data-for</code>, <code>data-on:click</code>) without JSX.",
        micro_code_router: "🧭 <b>Micro-Code Router</b>",
        micro_code_router_text: "SPA navigation system with <b>under 200 bytes</b> of core code. Simple yet powerful.",
        instant_boot: "⚡ <b>Instant Boot</b>",
        instant_boot_text: "Runs immediately in browser with no build steps. <b>Perfect for rapid prototyping</b>.",
        unix_philosophy_api: "🔌 <b>UNIX Philosophy API</b>",
        unix_philosophy_api_text: "<b>\"Do one thing well\"</b> principle. Concise and predictable methods.",
        progressive_evolution: "📱 <b>Progressive Evolution</b>",
        progressive_evolution_text: "Start with a traditional script and scale to <b>full PWA</b> as needed.",
        full_interoperability: "🛠️ <b>Full Interoperability</b>",
        full_interoperability_text: "Use only what you need and integrate with <b>any existing stack</b>.",
        counter_component: "Counter Component",
        counter_component_text: "An example of a simple counter component with reactive state.",
        conditional_rendering: "Conditional Rendering",
        conditional_rendering_text: "Render elements dynamically based on state conditions.",
        list_rendering: "List Rendering",
        list_rendering_text: "Easily render lists of items using the <code>data-for</code> directive.",
        slot_component: "Slot Component",
        slot_component_text: "A component that demonstrates how slots allow parent-child content projection.",
        core_concepts: "Core Concepts",
        core_concepts_text: "Learn the fundamental concepts of Lila JS to build reactive applications.",
        reactivity: "Reactivity",
        reactivity_text: "Lila JS reactivity system automatically updates the DOM when state changes.",
        routing: "Routing",
        routing_text: "Define simple routes with built-in micro-router for SPAs.",
        api_reference: "API Reference",
        create_component: "App.createComponent",
        create_component_text: "Defines a new component with template, state, and actions.",
        define_route: "App.defineRoute",
        define_route_text: "Associates a path with a template or component.",
        mount: "App.mount",
        mount_text: "Mounts your application to the DOM element provided.",
        set_state: "setState",
        set_state_text: "Updates component state and re-renders automatically.",

    },
    es: {
        home: "Inicio",
        documentation: "Documentación",
        examples: "Ejemplos",
        welcome: "Bienvenido a Lila JS",
        description: "La librería de JavaScript minimalista para construir componentes web reactivos con facilidad.",
        why: "¿Por qué Lila JS?",
        zero_dependencies: "Cero Dependencias: Solo un archivo de script, nada más que instalar.",
        web_components: "Componentes Web: Construye componentes encapsulados y reutilizables.",
        simple_reactive: "Simple y Reactivo: El manejo del estado es simple y la interfaz de usuario se actualiza automáticamente.",
        lightweight: "Ligero: Huella pequeña, ideal para aplicaciones críticas de rendimiento.",
        get_started: "Comenzar",
        get_started_text: "Incluye Lila JS en tu proyecto con una sola etiqueta de script:",
        get_started_code: "&lt;script src=\"lila.js\"&gt;&lt;/script&gt;",
        get_started_then: "¡Luego, comienza a construir tus componentes!",
        features: "Ventajas clave de <b>Lila JS</b> como Micro-Framework",
        ultra_compact_core: "🚀 <b>Núcleo Ultracompacto</b>",
        ultra_compact_core_text: "Sistema reactivo completo, enrutamiento y componentes en <b>menos de 10kb</b>. Sin bloatware ni dependencias ocultas.",
        precise_reactivity: "💡 <b>Reactividad Precisa</b>",
        precise_reactivity_text: "<b>Sistema de actualización granular</b> que solo modifica lo necesario en el DOM usando <b>Proxy nativo</b>.",
        self_contained_components: "🧩 <b>Componentes Autocontenidos</b>",
        self_contained_components_text: "Cada componente gestiona su propio <b>estado reactivo</b>, <b>ciclo de vida</b> y <b>plantilla con alcance</b>.",
        declarative_binding: "🔄 <b>Enlace Declarativo</b>",
        declarative_binding_text: "Vincula datos con <b>atributos HTML simples</b> (<code>data-for</code>, <code>data-on:click</code>) sin JSX.",
        micro_code_router: "🧭 <b>Enrutador de Microcódigo</b>",
        micro_code_router_text: "Sistema de navegación SPA con <b>menos de 200 bytes</b> de código central. Simple pero potente.",
        instant_boot: "⚡ <b>Arranque Instantáneo</b>",
        instant_boot_text: "Se ejecuta inmediatamente en el navegador sin pasos de compilación. <b>Perfecto para prototipado rápido</b>.",
        unix_philosophy_api: "🔌 <b>API con Filosofía UNIX</b>",
        unix_philosophy_api_text: "Principio <b>\"Haz una cosa bien\"</b>. Métodos concisos y predecibles.",
        progressive_evolution: "📱 <b>Evolución Progresiva</b>",
        progressive_evolution_text: "Comienza con un script tradicional y escala a <b>PWA completo</b> según sea necesario.",
        full_interoperability: "🛠️ <b>Interoperabilidad Total</b>",
        full_interoperability_text: "Usa solo lo que necesitas e integra con <b>cualquier stack existente</b>.",
        counter_component: "Componente Contador",
        counter_component_text: "Un ejemplo de un componente contador simple con estado reactivo.",
        conditional_rendering: "Renderizado Condicional",
        conditional_rendering_text: "Renderiza elementos dinámicamente según condiciones del estado.",
        list_rendering: "Renderizado de Listas",
        list_rendering_text: "Renderiza fácilmente listas de elementos usando la directiva <code>data-for</code>.",
        slot_component: "Componente con Slot",
        slot_component_text: "Un componente que demuestra cómo los slots permiten proyectar contenido del padre.",
        core_concepts: "Conceptos Básicos",
        core_concepts_text: "Aprende los conceptos fundamentales de Lila JS para construir aplicaciones reactivas.",
        reactivity: "Reactividad",
        reactivity_text: "El sistema de reactividad de Lila JS actualiza automáticamente el DOM cuando cambia el estado.",
        routing: "Enrutamiento",
        routing_text: "Define rutas simples con el enrutador micro incorporado para SPAs.",
        api_reference: "Referencia de API",
        create_component: "App.createComponent",
        create_component_text: "Define un nuevo componente con plantilla, estado y acciones.",
        define_route: "App.defineRoute",
        define_route_text: "Asocia una ruta con una plantilla o componente.",
        mount: "App.mount",
        mount_text: "Monta tu aplicación en el elemento del DOM proporcionado.",
        set_state: "setState",
        set_state_text: "Actualiza el estado del componente y vuelve a renderizar automáticamente.",
        
    }
};


const lang = document.documentElement.lang;
const t = i18n[lang];

const homeTemplate = /*html*/`
    <div class="prose max-w-none">
        <div class="text-center">
            <h1 class="text-5xl font-bold text-purple-600">Lila JS</h1>
            <p class="text-xl">${t.description}</p>
        </div>

        <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="p-6 bg-white rounded-lg shadow-md">
                <h3 class="text-2xl font-bold">${t.ultra_compact_core}</h3>
                <p>${t.ultra_compact_core_text}</p>
            </div>
            <div class="p-6 bg-white rounded-lg shadow-md">
                <h3 class="text-2xl font-bold">${t.precise_reactivity}</h3>
                <p>${t.precise_reactivity_text}</p>
            </div>
            <div class="p-6 bg-white rounded-lg shadow-md">
                <h3 class="text-2xl font-bold">${t.self_contained_components}</h3>
                <p>${t.self_contained_components_text}</p>
            </div>
            <div class="p-6 bg-white rounded-lg shadow-md">
                <h3 class="text-2xl font-bold">${t.declarative_binding}</h3>
                <p>${t.declarative_binding_text}</p>
            </div>
            <div class="p-6 bg-white rounded-lg shadow-md">
                <h3 class="text-2xl font-bold">${t.micro_code_router}</h3>
                <p>${t.micro_code_router_text}</p>
            </div>
            <div class="p-6 bg-white rounded-lg shadow-md">
                <h3 class="text-2xl font-bold">${t.instant_boot}</h3>
                <p>${t.instant_boot_text}</p>
            </div>
        </div>
    </div>
`;

App.createComponent('lila-link', {
    template: /*html*/`
        <a href="#\${props.href}"
           class="text-\${props.color}-600 hover:underline hover:text-\${props.color}-800"
           data-on:click="handleClick">
          <slot></slot>
        </a>
      `,
    actions: {
        handleClick(event) {
            event.preventDefault();
            const href = this.props.href;
            App.navigate(href);
        }
    }
});

App.defineRoute("/", () => homeTemplate);

const documentationTemplate = /*html*/`
    <div class="prose max-w-none">
        <h1 class="text-4xl font-bold mb-4">${t.documentation}</h1>

        <h2 class="text-2xl font-bold mt-8 mb-4">${t.core_concepts}</h2>
        <p>${t.core_concepts_text}</p>

        <h3 class="text-xl font-bold mt-6 mb-2">${t.reactivity}</h3>
        <p>${t.reactivity_text}</p>

        <h3 class="text-xl font-bold mt-6 mb-2">${t.routing}</h3>
        <p>${t.routing_text}</p>

        <h2 class="text-2xl font-bold mt-8 mb-4">${t.api_reference}</h2>

        <h3 class="text-xl font-bold mt-6 mb-2">${t.create_component}</h3>
        <p>${t.create_component_text}</p>

        <h3 class="text-xl font-bold mt-6 mb-2">${t.define_route}</h3>
        <p>${t.define_route_text}</p>

        <h3 class="text-xl font-bold mt-6 mb-2">${t.mount}</h3>
        <p>${t.mount_text}</p>

        <h3 class="text-xl font-bold mt-6 mb-2">${t.set_state}</h3>
        <p>${t.set_state_text}</p>
    </div>
`;
const examplesTemplate = /*html*/`
    <div class="prose max-w-none">
        <h1 class="text-4xl font-bold mb-4">${t.examples}</h1>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">${t.counter_component}</h2>
        <p>${t.counter_component_text}</p>
        <div class="flex flex-col gap-8">
            <counter-example class="w-full"></counter-example>
            <div class="code-editor w-full">
                <div class="editor-header">
                    <span class="editor-title">counter-example.js</span>
                    <div class="editor-controls">
                        <div class="control close"></div>
                        <div class="control minimize"></div>
                        <div class="control maximize"></div>
                    </div>
                </div>
                <div class="editor-content">
                    <pre><code class="language-js">
<span class="syntax-keyword">App</span>.createComponent('<span class="syntax-string">counter-example</span>', {
    <span class="syntax-keyword">state</span>: () => ({
        <span class="syntax-prop">count</span>: <span class="syntax-number">0</span>
    }),
    <span class="syntax-keyword">template</span>: \`
        &lt;div&gt;
            &lt;p&gt;Conteo: \${<span class="syntax-variable">state</span>.<span class="syntax-prop">count</span>}&lt;/p&gt;
            &lt;button data-on:click="<span class="syntax-action">increment</span>"&gt;Incrementar&lt;/button&gt;
        &lt;/div&gt;
    \`,
    <span class="syntax-keyword">actions</span>: {
        <span class="syntax-action">increment</span>() {
            <span class="syntax-keyword">this</span>.<span class="syntax-action">setState</span>({ <span class="syntax-prop">count</span>: <span class="syntax-keyword">this</span>.<span class="syntax-variable">state</span>.<span class="syntax-prop">count</span> + <span class="syntax-number">1</span> });
        }
    }
});
                    </code></pre>
                </div>
            </div>
        </div>

         
        <h2 class="text-2xl font-bold mt-8 mb-4">${t.conditional_rendering}</h2>
        <p>${t.conditional_rendering_text}</p>
        <div class="flex flex-col gap-8">
            <conditional-example class="w-full"></conditional-example>
            <div class="code-editor w-full">
                <div class="editor-header">
                    <span class="editor-title">conditional-example.js</span>
                    <div class="editor-controls">
                        <div class="control close"></div>
                        <div class="control minimize"></div>
                        <div class="control maximize"></div>
                    </div>
                </div>
                <div class="editor-content">
                    <pre><code class="language-js">
<span class="syntax-keyword">App</span>.createComponent('<span class="syntax-string">conditional-example</span>', {
    <span class="syntax-keyword">state</span>: () => ({
        <span class="syntax-prop">show</span>: <span class="syntax-boolean">true</span>
    }),
    <span class="syntax-keyword">template</span>: \`
        &lt;div&gt;
            &lt;button data-on:click="<span class="syntax-action">toggle</span>"&gt;Alternar&lt;/button&gt;
            &lt;div data-if="<span class="syntax-prop">show</span>"&gt;
                Este elemento se renderiza condicionalmente.
            &lt;/div&gt;
        &lt;/div&gt;
    \`,
    <span class="syntax-keyword">actions</span>: {
        <span class="syntax-action">toggle</span>() {
            <span class="syntax-keyword">this</span>.<span class="syntax-action">setState</span>({ <span class="syntax-prop">show</span>: !<span class="syntax-keyword">this</span>.<span class="syntax-variable">state</span>.<span class="syntax-prop">show</span> });
        }
    }
});
                    </code></pre>
                </div>
            </div>
        </div>

         
        <h2 class="text-2xl font-bold mt-8 mb-4">${t.list_rendering}</h2>
        <p>${t.list_rendering_text}</p>
        <div class="flex flex-col gap-8">
            <list-example class="w-full"></list-example>
            <div class="code-editor w-full">
                <div class="editor-header">
                    <span class="editor-title">list-example.js</span>
                    <div class="editor-controls">
                        <div class="control close"></div>
                        <div class="control minimize"></div>
                        <div class="control maximize"></div>
                    </div>
                </div>
                <div class="editor-content">
                    <pre><code class="language-js">
<span class="syntax-keyword">App</span>.createComponent('<span class="syntax-string">list-example</span>', {
    <span class="syntax-keyword">state</span>: () => ({
        <span class="syntax-prop">items</span>: ['<span class="syntax-string">Apple</span>', '<span class="syntax-string">Banana</span>', '<span class="syntax-string">Cherry</span>']
    }),
    <span class="syntax-keyword">template</span>: \`
        &lt;div&gt;
            &lt;ul&gt;
                &lt;li data-for="<span class="syntax-variable">item</span> <span class="syntax-in">in</span> <span class="syntax-prop">items</span>"&gt;\${<span class="syntax-variable">item</span>}&lt;/li&gt;
            &lt;/ul&gt;
            &lt;button data-on:click="<span class="syntax-action">addItem</span>"&gt;Añadir Elemento&lt;/button&gt;
        &lt;/div&gt;
    \`,
    <span class="syntax-keyword">actions</span>: {
        <span class="syntax-action">addItem</span>() {
            <span class="syntax-keyword">const</span> <span class="syntax-variable">newItem</span> = \`Item \${<span class="syntax-keyword">this</span>.<span class="syntax-variable">state</span>.<span class="syntax-prop">items</span>.length + <span class="syntax-number">1</span>}\`;
            <span class="syntax-keyword">this</span>.<span class="syntax-action">setState</span>({ <span class="syntax-prop">items</span>: [...<span class="syntax-keyword">this</span>.<span class="syntax-variable">state</span>.<span class="syntax-prop">items</span>, <span class="syntax-variable">newItem</span>] });
        }
    }
});
                    </code></pre>
                </div>
            </div>
        </div>

         
        <h2 class="text-2xl font-bold mt-8 mb-4">${t.slot_component}</h2>
        <p>${t.slot_component_text}</p>
        <div class="flex flex-col gap-8">
            <slot-example class="w-full">
                <span class="font-bold text-purple-600">${lang === 'es' ? '¡Este contenido es del padre!' : 'This content is from the parent!'}</span>
            </slot-example>
            <div class="code-editor w-full">
                <div class="editor-header">
                    <span class="editor-title">slot-example.js</span>
                    <div class="editor-controls">
                        <div class="control close"></div>
                        <div class="control minimize"></div>
                        <div class="control maximize"></div>
                    </div>
                </div>
                <div class="editor-content">
                    <pre><code class="language-js">
<span class="syntax-comment">// Componente con slot</span>
<span class="syntax-keyword">App</span>.createComponent('<span class="syntax-string">slot-example</span>', {
    <span class="syntax-keyword">template</span>: \`
        &lt;div&gt;
            &lt;p&gt;Contenido propio.&lt;/p&gt;
            &lt;div class="border-t mt-4 pt-4"&gt;
                &lt;slot&gt;&lt;/slot&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    \`
});

<span class="syntax-comment">// Uso en el HTML padre</span>
&lt;<span class="syntax-tag">slot-example</span>&gt;
    &lt;<span class="syntax-tag">span</span>&gt;Contenido desde el padre.&lt;/<span class="syntax-tag">span</span>&gt;
&lt;/<span class="syntax-tag">slot-example</span>&gt;
                    </code></pre>
                </div>
            </div>
        </div>
    </div>
`;
App.createComponent('counter-example', {
    template: /*html*/`
        <div class="border p-4 rounded-md bg-white">
            <p class="text-lg">${lang === 'es' ? 'Conteo' : 'Count'}: \${state.count}</p>
            <button class="bg-purple-600 text-white px-4 py-2 rounded-md" data-on:click="increment">${lang === 'es' ? 'Incrementar' : 'Increment'}</button>
        </div>
    `,
    state: () => ({
        count: 0
    }),
    actions: {
        increment() {
            this.setState({ count: this.state.count + 1 });
        }
    }
});

App.createComponent('conditional-example', {
    template: /*html*/`
        <div class="border p-4 rounded-md bg-white">
            <button class="bg-purple-600 text-white px-4 py-2 rounded-md mb-4" data-on:click="toggle">${lang === 'es' ? 'Alternar' : 'Toggle'}</button>
            <div data-if="show" class="bg-green-200 p-4 rounded-md">
                ${lang === 'es' ? 'Este elemento se renderiza condicionalmente.' : 'This element is conditionally rendered.'}
            </div>
        </div>
    `,
    state: () => ({
        show: true
    }),
    actions: {
        toggle() {
            this.setState({ show: !this.state.show });
        }
    }
});

App.createComponent('list-example', {
    template: /*html*/`
        <div class="border p-4 rounded-md bg-white">
            <ul class="list-disc pl-5">
                <li data-for="item in items">\${item}</li>
            </ul>
            <button class="bg-purple-600 text-white px-4 py-2 rounded-md mt-4" data-on:click="addItem">${lang === 'es' ? 'Añadir Elemento' : 'Add Item'}</button>
        </div>
    `,
    state: () => ({
        items: ['Apple', 'Banana', 'Cherry']
    }),
    actions: {
        addItem() {
            const newItem = `Item ${this.state.items.length + 1}`;
            this.setState({ items: [...this.state.items, newItem] });
        }
    }
});

App.createComponent('slot-example', {
    template: /*html*/`
        <div class="border p-4 rounded-md bg-white">
            <p>${lang === 'es' ? 'Este es el contenido propio del componente. Debajo está el contenido del padre:' : 'This is the component\'s own content. Below is the content from the parent:'}</p>
            <div class="border-t mt-4 pt-4">
                <slot></slot>
            </div>
        </div>
    `
});

App.defineRoute("/documentation", () => documentationTemplate);
App.defineRoute("/examples", () => examplesTemplate);

App.mount("app");

 