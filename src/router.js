import { createRouter, createWebHistory } from "vue-router";

//Pages
import HomePage from './pages/HomePage.vue';
import ListProjects from './components/ListProjects.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage,
        }
    ]
})

export default router;