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
        form_component: "Form Component",
        form_component_text: "A complete form example with two-way data binding (data-bind='name_prop_or_state').",
        todo_app: "Todo App",
        todo_app_text: "A complete todo application demonstrating multiple Lila JS features.",
        starter_template: "Starter Template",
        starter_template_text: "A complete starter template for building applications with Lila JS.",
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
        lifecycle_hooks: "Lifecycle Hooks",
        lifecycle_hooks_text: "Lifecycle hooks allow you to run code at specific stages of a component's life.",
        on_mount: "onMount",
        on_mount_text: "Called when the component is mounted to the DOM.",
        on_unmount: "onUnmount",
        on_unmount_text: "Called when the component is removed from the DOM.",
        two_way_binding: "Two-Way Binding",
        two_way_binding_text: "Bind form inputs directly to your component state.",
        event_handling: "Event Handling",
        event_handling_text: "Handle user interactions with declarative event bindings.",
        component_communication: "Component Communication",
        component_communication_text: "Pass data between components using props and custom events.",
        important : "Important, remember to use ${props.title} or ${state.title} you must use backticks ` ` in the template literal with '\' before the $ ,like this: \\\${props.title} or \\\${state.title}. If you use single quotes ' ' or double quotes \" \" it won't work, also if you don't use '\' before the $.",
        install: "Installation",
        getting_started: "Getting Started",
        getting_started_text: "Follow these steps to create your first Lila JS application.",
        starter_template_title: "Starter Template",
        starter_template_desc: "Here is a basic counter application with routing to get you started.",
        create_component_options: "Component Options",
        options_template: "template",
        options_template_desc: "A string literal (using backticks ``) that defines the HTML structure of the component. You can interpolate state and props using `${state.propertyName}` and `${props.propertyName}`.",
        options_state: "state",
        options_state_desc: "A function that returns the initial state of the component. It can receive `props` as an argument to initialize state based on properties passed to the component.",
        options_actions: "actions",
        options_actions_desc: "An object containing methods that can be called from your template to handle events and update the component's state.",
        options_onmount: "onMount",
        options_onmount_desc: "A function that is called when the component is first mounted to the DOM. Useful for fetching data or performing initial setup.",
        options_ondestroy: "onUnmount",
        options_ondestroy_desc: "A function that is called when the component is removed from the DOM. Useful for cleanup tasks.",
        routing_example: "Routing Example",
        routing_example_desc: "Here’s how you can set up simple SPA routing using `defineRoute` and the `lila-link` component.",
        examples_html: "We leave you 2 html pages with two examples so you can see the code working "
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
        form_component: "Componente de Formulario",
        form_component_text: "Un ejemplo completo de formulario con enlace bidireccional de datos,utilizando data-bind.",
        todo_app: "App de Tareas",
        todo_app_text: "Una aplicación completa de tareas que demuestra múltiples características de Lila JS.",
        starter_template: "Plantilla Inicial",
        starter_template_text: "Una plantilla completa para comenzar a construir aplicaciones con Lila JS.",
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
        lifecycle_hooks: "Hooks del Ciclo de Vida",
        lifecycle_hooks_text: "Los hooks del ciclo de vida te permiten ejecutar código en etapas específicas de la vida de un componente.",
        on_mount: "onMount",
        on_mount_text: "Se llama cuando el componente se monta en el DOM.",
        on_unmount: "onUnmount",
        on_unmount_text: "Se llama cuando el componente se elimina del DOM.",
        two_way_binding: "Enlace Bidireccional",
        two_way_binding_text: "Vincula entradas de formulario directamente al estado de tu componente.",
        event_handling: "Manejo de Eventos",
        event_handling_text: "Maneja interacciones del usuario con enlaces de eventos declarativos.",
        component_communication: "Comunicación entre Componentes",
        component_communication_text: "Pasa datos entre componentes usando props y eventos personalizados.",
        important : "Importante, recuerda para utlizar ${props.title} o ${state.title} debes usar backticks ` ` en el template literal con '\' antes de los $ ,así : \\\${props.title} o \\\${state.title}. Si usas comillas simples ' ' o dobles \" \" no funcionará, tampoco si no usas '\' antes del $.",
        install: "Instalación",
        getting_started: "Empezando",
        getting_started_text: "Sigue estos pasos para crear tu primera aplicación con Lila JS.",
        starter_template_title: "Plantilla de Inicio",
        starter_template_desc: "Aquí tienes una aplicación de contador básica con enrutamiento para que puedas comenzar.",
        create_component_options: "Opciones del Componente",
        options_template: "plantilla",
        options_template_desc: "Una cadena de texto (usando backticks ``) que define la estructura HTML del componente. Puedes interpolar el estado y las props usando `${state.propertyName}` y `${props.propertyName}`.",
        options_state: "estado",
        options_state_desc: "Una función que devuelve el estado inicial del componente. Puede recibir `props` como argumento para inicializar el estado basado en las propiedades pasadas al componente.",
        options_actions: "acciones",
        options_actions_desc: "Un objeto que contiene métodos que pueden ser llamados desde tu plantilla para manejar eventos y actualizar el estado del componente.",
        options_onmount: "onMount",
        options_onmount_desc: "Una función que se llama cuando el componente se monta por primera vez en el DOM. Útil para obtener datos o realizar una configuración inicial.",
        options_ondestroy: "onUnmount",
        options_ondestroy_desc: "Una función que se llama cuando el componente se elimina del DOM. Útil para tareas de limpieza.",
        routing_example: "Ejemplo de Enrutamiento",
        routing_example_desc: "A continuación se muestra cómo puedes configurar un enrutamiento de SPA simple usando `defineRoute` y el componente `lila-link`.",
        examples_html: "Te dejamos 2 páginas html con dos ejemplos para que puedas ver el código funcionando "
 }
};

const lang = document.documentElement.lang;
const t = i18n[lang];
 
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
 
const documentationTemplate = /*html*/`
    <div class="prose max-w-none">
    
        <h2 class="text-3xl font-bold mb-4">${t.install}</h2>
        <p>${t.get_started_text}</p>
        <div class="code-editor">
            <div class="editor-header"><span class="editor-title">HTML</span></div>
            <div class="editor-content">
                <pre><code class="language-html">
&lt;!-- Include Lila JS from a local file --&gt;
<span class="syntax-string">
&lt;script src="lila.js"&gt;&lt;/script&gt;
</span>
&lt;!-- Or from a CDN --&gt;
<span class="syntax-string">
&lt;script src="https://seip25.github.io/Lila_js/lila.js"&gt;&lt;/script&gt;
</span> 
&lt;!-- Or minify --&gt;
<span class="syntax-string">
&lt;script src="https://seip25.github.io/Lila_js/lila.min.js"&gt;&lt;/script&gt;
</span> 
</code></pre>
            </div>
        </div>

        <h2 class="text-3xl font-bold mt-8 mb-4">${t.getting_started}</h2>
        <p>${t.getting_started_text}</p>

        <h3 class="text-2xl font-bold mt-6 mb-2">${t.starter_template_title}</h3>
        <p>${t.starter_template_desc}</p>
        <div class="code-editor">
            <div class="editor-header"><span class="editor-title">index.html</span></div>
            <div class="editor-content"> 
<pre class="code-editor"><code class="language-html">
<span class="syntax-tag">&lt;!DOCTYPE html&gt;</span>
<span class="syntax-tag">&lt;html</span> <span class="syntax-attr">lang</span>=<span class="syntax-string">"en"</span><span class="syntax-tag">&gt;</span>
<span class="syntax-tag">&lt;head&gt;</span>
    <span class="syntax-tag">&lt;meta</span> <span class="syntax-attr">charset</span>=<span class="syntax-string">"UTF-8"</span><span class="syntax-tag">&gt;</span>
    <span class="syntax-tag">&lt;meta</span> <span class="syntax-attr">name</span>=<span class="syntax-string">"viewport"</span> <span class="syntax-attr">content</span>=<span class="syntax-string">"width=device-width, initial-scale=1.0"</span><span class="syntax-tag">&gt;</span>
    <span class="syntax-tag">&lt;title&gt;</span><span class="syntax-string">Lila JS Starter Template</span><span class="syntax-tag">&lt;/title&gt;</span>
    <span class="syntax-tag">&lt;script</span> <span class="syntax-attr">src</span>=<span class="syntax-string">"https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"</span><span class="syntax-tag">&gt;&lt;/script&gt;</span>
    <span class="syntax-tag">&lt;script</span> <span class="syntax-attr">src</span>=<span class="syntax-string">"lila.js"</span><span class="syntax-tag">&gt;&lt;/script&gt;</span>
<span class="syntax-tag">&lt;/head&gt;</span>
<span class="syntax-tag">&lt;body&gt;</span>
    <span class="syntax-tag">&lt;nav</span> <span class="syntax-attr">class</span>=<span class="syntax-string">"bg-white shadow-sm p-4"</span><span class="syntax-tag">&gt;</span>
        <span class="syntax-tag">&lt;lila-link</span> <span class="syntax-attr">href</span>=<span class="syntax-string">"/"</span> <span class="syntax-attr">color</span>=<span class="syntax-string">"purple"</span><span class="syntax-tag">&gt;</span><span class="syntax-string">Home</span><span class="syntax-tag">&lt;/lila-link&gt;</span>
        <span class="syntax-tag">&lt;lila-link</span> <span class="syntax-attr">href</span>=<span class="syntax-string">"/about"</span> <span class="syntax-attr">color</span>=<span class="syntax-string">"purple"</span> <span class="syntax-attr">class</span>=<span class="syntax-string">"ml-4"</span><span class="syntax-tag">&gt;</span><span class="syntax-string">About</span><span class="syntax-tag">&lt;/lila-link&gt;</span>
    <span class="syntax-tag">&lt;/nav&gt;</span>
    <span class="syntax-tag">&lt;main</span> <span class="syntax-attr">id</span>=<span class="syntax-string">"app"</span> <span class="syntax-attr">class</span>=<span class="syntax-string">"container mx-auto p-4"</span><span class="syntax-tag">&gt;&lt;/main&gt;</span>

    <span class="syntax-keyword">&lt;script&gt;</span>
        <span class="syntax-comment">// Define templates for our pages</span>
        <span class="syntax-keyword">const</span> homeTemplate = \`
            <span class="syntax-tag">&lt;div&gt;</span>
                <span class="syntax-tag">&lt;h1</span> <span class="syntax-attr">class</span>=<span class="syntax-string">"text-2xl"</span><span class="syntax-tag">&gt;</span><span class="syntax-string">Home Page</span><span class="syntax-tag">&lt;/h1&gt;</span>
                <span class="syntax-tag">&lt;p&gt;</span><span class="syntax-string">Welcome to the Lila JS starter template.</span><span class="syntax-tag">&lt;/p&gt;</span>
                <span class="syntax-tag">&lt;counter-component&gt;&lt;/counter-component&gt;</span>
            <span class="syntax-tag">&lt;/div&gt;</span>
        \`;

        <span class="syntax-keyword">const</span> aboutTemplate = \`
            <span class="syntax-tag">&lt;div&gt;</span>
                <span class="syntax-tag">&lt;h1</span> <span class="syntax-attr">class</span>=<span class="syntax-string">"text-2xl"</span><span class="syntax-tag">&gt;</span><span class="syntax-string">About Page</span><span class="syntax-tag">&lt;/h1&gt;</span>
                <span class="syntax-tag">&lt;p&gt;</span><span class="syntax-string">This page is another route in your single-page application.</span><span class="syntax-tag">&lt;/p&gt;</span>
            <span class="syntax-tag">&lt;/div&gt;</span>
        \`;

        <span class="syntax-comment">// Define the lila-link component for navigation</span>
        App.createComponent(<span class="syntax-string">'lila-link'</span>, {
            template: \`
                <span class="syntax-tag">&lt;a</span> <span class="syntax-attr">href</span>="#\\\${props.href}"
                   <span class="syntax-attr">class</span>="text-\\\${props.color}-600 hover:underline hover:text-\\\${props.color}-800"
                   <span class="syntax-attr">data-on:click</span>="handleClick"<span class="syntax-tag">&gt;</span>
                  <span class="syntax-tag">&lt;slot&gt;&lt;/slot&gt;</span>
                <span class="syntax-tag">&lt;/a&gt;</span>
            \`,
            actions: {
                handleClick(event) {
                    event.preventDefault();
                    App.navigate(this.props.href);
                }
            }
        });

        <span class="syntax-comment">// Define the counter component</span>
        App.createComponent(<span class="syntax-string">'counter-component'</span>, {
            state: () => ({ count: 0 }),
            template: \`
                <span class="syntax-tag">&lt;div</span> <span class="syntax-attr">class</span>="mt-4 border p-4 rounded-lg"<span class="syntax-tag">&gt;</span>
                    <span class="syntax-tag">&lt;p</span> <span class="syntax-attr">class</span>="font-bold"<span class="syntax-tag">&gt;</span><span class="syntax-string">Counter</span><span class="syntax-tag">&lt;/p&gt;</span>
                    <span class="syntax-tag">&lt;p&gt;</span><span class="syntax-string">Current count:</span> \\\${state.count}<span class="syntax-tag">&lt;/p&gt;</span>
                    <span class="syntax-tag">&lt;button</span> <span class="syntax-attr">class</span>="bg-purple-600 text-white px-3 py-1 rounded mt-2"
                            <span class="syntax-attr">data-on:click</span>="increment"<span class="syntax-tag">&gt;</span>
                        <span class="syntax-string">Increment</span>
                    <span class="syntax-tag">&lt;/button&gt;</span>
                <span class="syntax-tag">&lt;/div&gt;</span>
            \`,
            actions: {
                increment() {
                    this.setState({ count: this.state.count + 1 });
                }
            }
        });

        <span class="syntax-comment">// Define routes</span>
        App.defineRoute(<span class="syntax-string">'/'</span>, () => homeTemplate);
        App.defineRoute(<span class="syntax-string">'/about'</span>, () => aboutTemplate);

        <span class="syntax-comment">// Mount the application</span>
        App.mount(<span class="syntax-string">'app'</span>);
    <span class="syntax-keyword">&lt;/script&gt;</span>
<span class="syntax-tag">&lt;/body&gt;</span>
<span class="syntax-tag">&lt;/html&gt;</span>
</code></pre>
            </div>
        </div>

        <h2 class="text-3xl font-bold mt-8 mb-4">${t.core_concepts}</h2>
        <p>${t.core_concepts_text}</p>

        <h3 class="text-2xl font-bold mt-6 mb-2">${t.reactivity}</h3>
        <p>${t.reactivity_text}</p>

        <h3 class="text-2xl font-bold mt-6 mb-2">${t.routing}</h3>
        <p>${t.routing_text}</p>
        <p>${t.routing_example_desc}</p>
        <div class="code-editor">
            <div class="editor-header"><span class="editor-title">JavaScript</span></div>
            <div class="editor-content">
                <pre><code class="language-js">
// Define routes for different pages
App.defineRoute('/', () => '&lt;h1&gt;Home Page&lt;/h1&gt;');
App.defineRoute('/about', () => '&lt;h1&gt;About Page&lt;/h1&gt;');

// Create a navigational link component
App.createComponent('lila-link', {
    template: '&lt;a href="#\\\${props.href}" data-on:click="navigate"&gt;&lt;slot&gt;&lt;/slot&gt;&lt;/a&gt;',
    actions: {
        navigate(e) {
            e.preventDefault();
            App.navigate(this.props.href);
        }
    }
});

// Mount the app to a DOM element
App.mount('app');
                </code></pre>
            </div>
            <div class="editor-header"><span class="editor-title">HTML</span></div>
            <div class="editor-content">
                <pre><code class="language-html">
&lt;nav&gt;
    &lt;lila-link href="/"&gt;Home&lt;/lila-link&gt;
    &lt;lila-link href="/about"&gt;About&lt;/lila-link&gt;
&lt;/nav&gt;
&lt;main id="app"&gt;&lt;/main&gt;
                </code></pre>
            </div>
        </div>

        <h3 class="text-2xl font-bold mt-6 mb-2">${t.lifecycle_hooks}</h3>
        <p>${t.lifecycle_hooks_text}</p>

        <h3 class="text-2xl font-bold mt-6 mb-2">${t.two_way_binding}</h3>
        <p>${t.two_way_binding_text}</p>

        <h3 class="text-2xl font-bold mt-6 mb-2">${t.event_handling}</h3>
        <p>${t.event_handling_text}</p>

        <h3 class="text-2xl font-bold mt-6 mb-2">${t.component_communication}</h3>
        <p>${t.component_communication_text}</p>

        <h2 class="text-3xl font-bold mt-8 mb-4">${t.api_reference}</h2>

        <h3 class="text-2xl font-bold mt-6 mb-2">${t.create_component}</h3>
        <p>Defines a new component. It takes two arguments: the component's tag name (e.g., 'my-component') and an options object.</p>
        <div class="code-editor">
            <div class="editor-header"><span class="editor-title">JavaScript</span></div>
            <div class="editor-content">
                <pre><code class="language-js">
App.createComponent('my-component', {
    // ... options
});
                </code></pre>
            </div>
        </div>

        <h4 class="text-xl font-bold mt-4 mb-2">${t.create_component_options}</h4>

        <h5 class="text-lg font-semibold mt-3 mb-1">${t.options_template}</h5>
        <p>${t.options_template_desc}</p>

        <h5 class="text-lg font-semibold mt-3 mb-1">${t.options_state}</h5>
        <p>${t.options_state_desc}</p>
        <div class="code-editor">
            <div class="editor-header"><span class="editor-title">JavaScript</span></div>
            <div class="editor-content">
                <pre><code class="language-js">
App.createComponent('user-profile', {
    state: (props) => ({
        name: props.name || 'Guest',
        followers: 0
    }),
    template: \`
        &lt;div&gt;
            &lt;h1&gt;\\\${state.name}&lt;/h1&gt;
            &lt;p&gt;Followers: \\\${state.followers}&lt;/p&gt;
        &lt;/div&gt;
    \`
});

// Usage in HTML
// &lt;user-profile name="Lila"&gt;&lt;/user-profile&gt;
                </code></pre>
            </div>
        </div>

        <h5 class="text-lg font-semibold mt-3 mb-1">${t.options_actions}</h5>
        <p>${t.options_actions_desc}</p>
        <div class="code-editor">
            <div class="editor-header"><span class="editor-title">JavaScript</span></div>
            <div class="editor-content">
                <pre><code class="language-js">
App.createComponent('counter-button', {
    state: () => ({ count: 0 }),
    template: \`
        &lt;button data-on:click="increment"&gt;
            Clicked \\\${state.count} times
        &lt;/button&gt;
    \`,
    actions: {
        increment() {
            this.setState({ count: this.state.count + 1 });
        }
    }
});
                </code></pre>
            </div>
        </div>

        <h5 class="text-lg font-semibold mt-3 mb-1">${t.options_onmount}</h5>
        <p>${t.options_onmount_desc}</p>
        <div class="code-editor">
            <div class="editor-header"><span class="editor-title">JavaScript</span></div>
            <div class="editor-content">
                <pre><code class="language-js">
App.createComponent('user-data', {
    state: () => ({ user: null }),
    template: \`
        &lt;div&gt;
            &lt;div data-if="!user"&gt;Loading...&lt;/div&gt;
            &lt;div data-if="user"&gt;
                Welcome, \\\${state.user.name}
            &lt;/div&gt;
        &lt;/div&gt;
    \`,
    onMount() {
        fetch('/api/user')
            .then(res => res.json())
            .then(user => this.setState({ user }));
    }
});
                </code></pre>
            </div>
        </div>

        <h5 class="text-lg font-semibold mt-3 mb-1">${t.options_ondestroy}</h5>
        <p>${t.options_ondestroy_desc}</p>

        <h3 class="text-2xl font-bold mt-6 mb-2">${t.define_route}</h3>
        <p>${t.define_route_text}</p>

        <h3 class="text-2xl font-bold mt-6 mb-2">${t.mount}</h3>
        <p>${t.mount_text}</p>

        <h3 class="text-2xl font-bold mt-6 mb-2">${t.set_state}</h3>
        <p>${t.set_state_text}</p>

        <br />
        <h1 class="text-2xl font-bold mb-4">${t.important}</h1>

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
<span class="syntax-keyword">
#In the html file
    &lt;counter-example&gt; &lt;/counter-example&gt;
</span>


<span class="syntax-keyword">App</span>.createComponent('<span class="syntax-string">counter-example</span>', {
    <span class="syntax-keyword">state</span>: () => ({
        <span class="syntax-prop">count</span>: <span class="syntax-number">0</span>
    }),
    <span class="syntax-keyword">template</span>: \`
        &lt;div&gt;
            &lt;p&gt;Conteo: \\\${<span class="syntax-variable">state</span>.<span class="syntax-prop">count</span>}&lt;/p&gt;
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
<span class="syntax-keyword">
#In the html file
    &lt;conditional-example&gt; &lt;/conditional-example&gt;
</span>
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
<span class="syntax-keyword">
#In the html file
    &lt;list-example&gt; &lt;/list-example&gt;
</span>

<span class="syntax-keyword">App</span>.createComponent('<span class="syntax-string">list-example</span>', {
    <span class="syntax-keyword">state</span>: () => ({
        <span class="syntax-prop">items</span>: ['<span class="syntax-string">Apple</span>', '<span class="syntax-string">Banana</span>', '<span class="syntax-string">Cherry</span>']
    }),
    <span class="syntax-keyword">template</span>: \`
        &lt;div&gt;
            &lt;ul&gt;
                &lt;li data-for="<span class="syntax-variable">item</span> <span class="syntax-in">in</span> <span class="syntax-prop">items</span>"&gt;\\\${<span class="syntax-variable">item</span>}&lt;/li&gt;
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

        <h2 class="text-2xl font-bold mt-8 mb-4">${t.form_component}</h2>
        <p>${t.form_component_text}</p>
        <div class="flex flex-col gap-8">
            <form-example class="w-full"></form-example>
            <div class="code-editor w-full">
                <div class="editor-header">
                    <span class="editor-title">form-example.js</span>
                    <div class="editor-controls">
                        <div class="control close"></div>
                        <div class="control minimize"></div>
                        <div class="control maximize"></div>
                    </div>
                </div>
                <div class="editor-content">
                    <pre><code class="language-js">
<span class="syntax-keyword">App</span>.createComponent('<span class="syntax-string">form-example</span>', {
    <span class="syntax-keyword">state</span>: () => ({
        <span class="syntax-prop">name</span>: '<span class="syntax-string">John Doe</span>',
        <span class="syntax-prop">email</span>: '<span class="syntax-string">john@example.com</span>',
        <span class="syntax-prop">message</span>: '<span class="syntax-string">Hello Lila JS!</span>'
    }),
    <span class="syntax-keyword">template</span>: \`
        &lt;div&gt;
            &lt;div class="mb-4"&gt;
                &lt;label class="block text-gray-700"&gt;Name&lt;/label&gt;
                &lt;input type="text" class="border p-2 w-full" 
                       data-model="name" /&gt;
            &lt;/div&gt;
            &lt;div class="mb-4"&gt;
                &lt;label class="block text-gray-700"&gt;Email&lt;/label&gt;
                &lt;input type="email" class="border p-2 w-full" 
                       data-model="email" /&gt;
            &lt;/div&gt;
            &lt;div class="mb-4"&gt;
                &lt;label class="block text-gray-700"&gt;Message&lt;/label&gt;
                &lt;textarea class="border p-2 w-full" 
                          data-model="message"&gt;&lt;/textarea&gt;
            &lt;/div&gt;
            &lt;button class="bg-purple-600 text-white px-4 py-2 rounded-md" 
                    data-on:click="submitForm"&gt;
                Submit
            &lt;/button&gt;
            &lt;div class="mt-4 p-4 bg-gray-100"&gt;
                &lt;h3 class="font-bold"&gt;Form Data:&lt;/h3&gt;
                &lt;p data-bind="name" &gt;Name: \\\${<span class="syntax-variable">state</span>.<span class="syntax-prop">name</span>}&lt;/p&gt;
                &lt;p  data-bind="email" &gt;Email: \\\${<span class="syntax-variable">state</span>.<span class="syntax-prop">email</span>}&lt;/p&gt;
                &lt;p  data-bind="message" &gt;Message: \\\${<span class="syntax-variable">state</span>.<span class="syntax-prop">message</span>}&lt;/p&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    \`,
    <span class="syntax-keyword">actions</span>: {
        <span class="syntax-action">submitForm</span>() {
            alert(\`Form submitted with: \${JSON.stringify(<span class="syntax-keyword">this</span>.<span class="syntax-variable">state</span>)}\`);
        }
    }
});
                    </code></pre>
                </div>
            </div>
        </div>

        
   <div class="flex flex-col gap-8 bg-white p-4 rounded-md mt-8">
     <p class="mt-4 mb-4 text-purple-600 text-2xl">${t.examples_html}</p>
    <a href="examples.html" class="mb-4 text-purple-600 underline hover:text-purple-300">Views Profile example</a>

    <a href="starter.html" class="text-purple-600 hover:text-purple-300 underline" >Starter app</a>
   </div>
     
      
`;
 
App.defineRoute("/", () => homeTemplate);
App.defineRoute("/documentation", () => documentationTemplate);
App.defineRoute("/examples", () => examplesTemplate);
 
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
            <button class="bg-purple-600 text-white px-4 py-2 rounded-md mb-4 " data-on:click="toggle">${lang === 'es' ? 'Alternar' : 'Toggle'}</button>
            <div data-if="show" class="bg-green-200 p-4 rounded-md">
                ${lang === 'es' ? 'Este elemento se renderiza condicionalmente.' : 'This element is conditionally rendered.'}
            </div>
        </div>
    `,
    state: (props) => ({
        show: true,
        color : props.color || 'purple'
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

App.createComponent('form-example', {
    template: /*html*/`
        <div class="border p-4 rounded-md bg-white">
            <div class="mb-4">
                <label class="block text-gray-700">${lang === 'es' ? 'Nombre' : 'Name'}</label>
                <input type="text" class="border p-2 w-full" data-model="name" />
            </div>
            <div class="mb-4">
                <label class="block text-gray-700">Email</label>
                <input type="email" class="border p-2 w-full" data-model="email" />
            </div>
            <div class="mb-4">
                <label class="block text-gray-700">${lang === 'es' ? 'Mensaje' : 'Message'}</label>
                <textarea class="border p-2 w-full" data-model="message"></textarea>
            </div>
            <button class="bg-purple-600 text-white px-4 py-2 rounded-md" data-on:click="submitForm">
                ${lang === 'es' ? 'Enviar' : 'Submit'}
            </button>
            <div class="mt-4 p-4 bg-gray-100">
                <h3 class="font-bold">${lang === 'es' ? 'Datos del Formulario' : 'Form Data'}:</h3>
                <p data-bind="name">${lang === 'es' ? 'Nombre' : 'Name'}: \${state.name}</p>
                <p data-bind="email">Email: \${state.email}</p>
                <p data-bind="message">${lang === 'es' ? 'Mensaje' : 'Message'}: \${state.message}</p>
            </div>
        </div>
    `,
    state: () => ({
        name: 'John Doe',
        email: 'john@example.com',
        message: 'Hello Lila JS!'
    }),
    actions: {
        submitForm() {
            alert(`${lang === 'es' ? 'Formulario enviado con:' : 'Form submitted with:'} ${JSON.stringify(this.state)}`);
        }
    }
});

App.createComponent('todo-app', {
    template: /*html*/`
        <div class="border p-4 rounded-md bg-white">
            <h2 class="text-2xl font-bold mb-4">${lang === 'es' ? 'App de Tareas' : 'Todo App'}</h2>
            
            <div class="flex mb-4">
                <input type="text" 
                       class="border p-2 flex-grow" 
                       placeholder="${lang === 'es' ? 'Añadir una nueva tarea...' : 'Add a new todo...'}"
                       data-model="newTodo" />
                <button class="bg-purple-600 text-white px-4 py-2 ml-2"
                        data-on:click="addTodo">
                    ${lang === 'es' ? 'Añadir' : 'Add'}
                </button>
            </div>
            
            <div class="flex space-x-2 mb-4">
                <button class="px-3 py-1 \${state.filter === 'all' ? 'bg-purple-600 text-white' : 'bg-gray-200'}"
                        data-on:click="setFilter" data-filter="all">
                    ${lang === 'es' ? 'Todos' : 'All'}
                </button>
                <button class="px-3 py-1 \${state.filter === 'active' ? 'bg-purple-600 text-white' : 'bg-gray-200'}"
                        data-on:click="setFilter" data-filter="active">
                    ${lang === 'es' ? 'Activos' : 'Active'}
                </button>
                <button class="px-3 py-1 \${state.filter === 'completed' ? 'bg-purple-600 text-white' : 'bg-gray-200'}"
                        data-on:click="setFilter" data-filter="completed">
                    ${lang === 'es' ? 'Completados' : 'Completed'}
                </button>
            </div>
            
            <ul class="space-y-2">
                <li data-for="todo in filteredTodos" class="flex items-center">
                    <input type="checkbox" 
                           class="mr-2" 
                           data-checked="\${todo.completed}"
                           data-on:change="toggleTodo" 
                           data-id="\${todo.id}" />
                    <span class="\${todo.completed ? 'line-through text-gray-500' : ''}">
                        \${todo.text}
                    </span>
                    <button class="ml-auto text-red-600"
                            data-on:click="removeTodo" 
                            data-id="\${todo.id}">
                        ${lang === 'es' ? 'Eliminar' : 'Delete'}
                    </button>
                </li>
            </ul>
            
            <div class="mt-4 text-gray-600">
                \${state.todos.filter(t => !t.completed).length} ${lang === 'es' ? 'tareas pendientes' : 'items left'}
            </div>
        </div>
    `,
    state: () => ({
        todos: [],
        newTodo: '',
        filter: 'all'
    }),
    computed: {
        filteredTodos() {
            const { todos, filter } = this.state;
            if (filter === 'active') return todos.filter(t => !t.completed);
            if (filter === 'completed') return todos.filter(t => t.completed);
            return todos;
        }
    },
    actions: {
        addTodo() {
            if (!this.state.newTodo.trim()) return;
            
            const newTodo = {
                id: Date.now(),
                text: this.state.newTodo,
                completed: false
            };
            
            this.setState({
                todos: [...this.state.todos, newTodo],
                newTodo: ''
            });
        },
        toggleTodo(event) {
            const id = parseInt(event.target.dataset.id);
            const todos = this.state.todos.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            );
            this.setState({ todos });
        },
        removeTodo(event) {
            const id = parseInt(event.target.dataset.id);
            const todos = this.state.todos.filter(todo => todo.id !== id);
            this.setState({ todos });
        },
        setFilter(event) {
            const filter = event.target.dataset.filter;
            this.setState({ filter });
        }
    }
});
 
App.mount("app");
 
 