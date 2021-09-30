import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from "vue-router";
import routes from "./routes";

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    linkActiveClass: '',
    routes
});

const app = createApp(App);
app.use(router);
app.mount('#app');
