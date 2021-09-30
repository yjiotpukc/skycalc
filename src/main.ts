import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";

const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: '',
    routes
});

const app = createApp(App);
app.use(router);
app.mount('#app');
