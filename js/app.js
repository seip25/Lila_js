
App.createComponent("Install", {
    template: "install-template",
    onMount: (state) => {
        hls();
    }
});

App.createComponent("Examples", {
    template: "examples-template",
    onMount: (state) => {
        hls();

    }
});

App.createComponent("Features", {
    template: "features-template",
    onMount: (state) => {
        hls(false, '#features');
    }
});

App.addRoute("*", "Features");
App.addRoute("/install", "Install");
App.addRoute("/examples", "Examples");
handleRouting();


let countAnimations = 0;

function hls(code = true, selector = '') {
    const observer = new MutationObserver((mutations) => {
        if (code) {
            hljs.highlightAll();
            Animations.fadeIn('pre code', 300);
        }
        else Animations.staggerFadeUp(selector, 300);
        if (countAnimations < 2) Animations.easeOutBack('div,p,ul, .tech-stack img, .tech-stack i', 300);
        countAnimations++;

        observer.disconnect();
    });

    observer.observe(document.getElementById("app-lila"), {
        childList: true,
        subtree: true
    });
}
const Animations = {
    fadeUp: (selector, delay = 0) => {
        return anime({
            targets: selector,
            translateY: [40, 0],
            opacity: [0, 1],
            duration: 800,
            delay: delay,
            easing: 'easeOutQuint'
        });
    },

    fadeIn: (selector, delay = 0) => {
        return anime({
            targets: selector,
            opacity: [0, 1],
            duration: 600,
            delay: delay,
            easing: 'easeInOutQuad'
        });
    },

    staggerFadeUp: (selector) => {
        return anime({
            targets: selector,
            translateY: [30, 0],
            opacity: [0, 1],
            delay: anime.stagger(100, { start: 200 }),
            duration: 700,
            easing: 'easeOutBack'
        });
    },
    easeOutBack: (selector, delay = 300) => {
        anime({
            targets: selector,
            translateY: [15, 0],
            opacity: [0, 1],
            scale: [0.9, 1],
            delay: anime.stagger(80, { start: delay }),
            duration: 600,
            easing: 'easeOutBack'
        });
    }
};


window.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('loaded');

    Animations.fadeUp('header nav', 200);

    theme();

    anime({
        targets: '.tech-stack img, .tech-stack i',
        translateY: [15, 0],
        opacity: [0, 1],
        scale: [0.9, 1],
        delay: anime.stagger(80, { start: 400 }),
        duration: 600,
        easing: 'easeOutBack'
    });
});

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
    const newTheme = event.matches ? 'dark' : 'light';
    theme(newTheme); 
});

function theme(theme_ = false) {
    let theme = theme_ ? theme_ : window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

    if (theme_) {
        localStorage.setItem('theme', theme_);
    }
    if (localStorage.getItem('theme') === 'dark' || localStorage.getItem('theme') === 'light') {
        theme = localStorage.getItem('theme');
    }
    document.documentElement.setAttribute('data-theme', theme);

    return theme;
}
