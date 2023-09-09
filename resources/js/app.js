import './bootstrap';
import '../css/app.css';

import { createApp, h } from 'vue';
import { createInertiaApp, Link, Head } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';
import dayjs from 'dayjs'

import { loadMercadoPago } from "@mercadopago/sdk-js";

await loadMercadoPago();
const mp = new window.MercadoPago("TEST-338486df-8c1b-4f73-94c6-0375085a30d5");

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, app, props, plugin }) {
        const VueApp = createApp({ render: () => h(app, props) });

        VueApp.config.globalProperties.$date = dayjs;

        VueApp.use(plugin)
            .use(ZiggyVue, Ziggy)
            .component('Link', Link)
            .component('Head', Head)
            .mount(el);
    },
});

InertiaProgress.init({
    color: 'rgb(141, 206, 121)',
    showSpinner: false
});