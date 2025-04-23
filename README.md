## Lila JS (ES) / Lila JS (EN)
Una nucro framework reactivo para construir aplicaciones web con JavaScript vanilla y HTML.
A minimalist reactive micro framework for building web applications with vanilla JavaScript and HTML.

### 📦 Instalación / Installation
Fácil instalación, solo incluirlo en HTML y utilizarlo.
Easy installation, just include it in HTML and use it.

### 🌟 Características principales / Key Features
- 🚀 Sistema reactivo basado en Proxy / Proxy-based reactive system
- 💡 Componentes con estado y lifecycle / Stateful components with lifecycle
- 🔄 Two-way data binding automático / Automatic two-way data binding
- 🧭 Enrutamiento cliente simple / Simple client-side routing
- 📦 0 dependencias (solo JS vanilla) / Zero dependencies (vanilla JS only)

## Documentation   (English)
https://seip25.github.io/Lila_js/ 

## Documentación (Español)
https://seip25.github.io/Lila_js/documentacion.html 

## 📚 Uso Básico / Basic Usage

### 1. Estructura básica / Basic Structure
```html
<body>
  <nav>
    <a href="/" data-link>Inicio</a>
    <a href="/about" data-link>About</a>
  </nav>
  
  <main id="app-lila"></main>
  
  <template data-template="my-template">
    <!-- Tu componente aquí / Your component here -->
  </template>
</body>
```

### 2. Crear un componente / Create a Component
```javascript
App.createComponent('MyComponent', {
  template: 'my-template',
  state: () => ({
    message: "Hello World"
  }),
  actions: {
    updateMessage: ({ state }) => {
      state.message = "Updated!";
    }
  },
  onMount: (state) => {
    console.log("Component mounted");
  },
  onDestroy: (state) => {
    console.log("Component destroyed");
  }
});
```

### 3. Enrutamiento / Routing
```javascript 
App.addRoute('/', 'HomeComponent');
App.addRoute('/about', 'AboutComponent');
App.addRoute('*', 'NotFoundComponent');
```

## 🔧 Atributos Personalizados / Custom Attributes
| Atributo / Attribute | Descripción / Description | Ejemplo / Example |
|----------------------|--------------------------|------------------|
| data-component | Define un componente anidado / Defines a nested component | `<div data-component="ChildComponent"></div>` |
| data-bind | Muestra el valor de una propiedad / Displays a property value | `<span data-bind="message"></span>` |
| data-model | Two-way data binding para inputs / Two-way binding for inputs | `<input data-model="username">` |
| data-action | Asocia una acción a un evento / Binds an action to an event | `<button data-action="submit">Submit</button>` |
| data-link | Navegación entre rutas / Route navigation | `<a href="/about" data-link>About</a>` |

## 📝 Guía Completa / Comprehensive Guide

### 🔄 Estado Reactivo / Reactive State
```javascript
const state = App.reactive({
  count: 0,
  user: null
});

// Suscribirse a cambios / Subscribe to changes
const unsubscribe = state.subscribe((prop, value) => {
  console.log(`${prop} changed to ${value}`);
});
```

### 🧩 Componentes Anidados / Nested Components
```html
<template data-template="parent-template">
  <h1>Parent Component</h1>
  <div data-component="ChildComponent"></div>
</template>
```

### 🛠️ Lifecycle Methods
```javascript
App.createComponent('Example', {
  // ...
  onMount: (state) => {
    state.timer = setInterval(...);
  },
  onDestroy: (state) => {
    clearInterval(state.timer);
  }
});
```

### 📡 Manejo de Formularios / Form Handling
```html
<template data-template="form-template">
  <form data-action="submitForm">
    <input data-model="email" type="email">
    <button type="submit">Submit</button>
  </form>
</template>
```
```javascript
actions: {
  submitForm: ({ state, event }) => {
    event.preventDefault();
    console.log("Form submitted:", state.email);
  }
}
```

## Ejemplos

### 1. Contador
```html
<template data-template="counter-template">
    <h1>Contador</h1>
    <p>Conteo actual: <span data-bind="count"></span></p>
    <button data-action="increment">Incrementar</button>
    <button data-action="decrement">Disminuir</button>
    <button data-action="reset">Reiniciar</button>
</template>
```
```javascript
const incrementCounter=({ state }) => { state.count++ };
    
App.createComponent('Counter', {
    template: 'counter-template',
    state: () => ({
        count: 0,
        interval: null
    }),
    actions: {
        increment: incrementCounter,
        decrement: ({ state }) => { state.count-- },
        reset: ({ state }) => { state.count = 0 }
    },
    onMount: (state) => {
        console.log('Counter mounted');
        state.interval = setInterval(() => {
            console.log('Interval tick', state.count);
            state.count++;
        }, 1000);
    },
    onDestroy: (state) => {
        console.log('Counter destroyed');
        if (state.interval) {
            clearInterval(state.interval);
            state.interval = null;
        }
    }
});
```

### 2. Home template
```html
<template data-template="home-template">
    <h1>¡Bienvenido a la página de inicio!</h1>
    <form data-action="submit">
        <input type="text" name="greet" data-bind="greet" placeholder="Ingresa tu saludo" />
        <button type="submit">Enviar</button>
    </form>
    <p>Tu saludo es: <span data-bind="greet"></span></p>
    <div data-component="Counter"></div>
</template>
```
```javascript
App.createComponent('Home', {
    template: 'home-template',
    state: () => ({
        greet: null
    }),
    actions: {
        changeGreeting: ({ state }) => {
            state.greet = state.greet === "Hello World!" ? "Hola Mundo!" : "Hello World!";
            console.log(state.greet);
        },
        submit: ({ state, event }) => {
            event.preventDefault();
            const formData = Object.fromEntries(new FormData(event.target));
            console.log('Form submitted:', formData);
            alert(JSON.stringify(formData));
        }
    }
});
```

### 3. Enrutamiento
```javascript
App.addRoute('/', 'Home');
App.addRoute('/about', 'About');
App.addRoute('/counter', 'Counter');
App.addRoute('*', 'NotFound');
handleRouting();
```
