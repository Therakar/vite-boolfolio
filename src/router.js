import { createRouter, createWebHistory } from "vue-router";

//Pages
import HomePage from './pages/HomePage.vue';
import AboutUs from './pages/AboutUs.vue';
import ListProjects from './components/ListProjects.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage,
        },
        {
            path: '/about-us',
            name: 'about-us',
            component: AboutUs,
        },
        {
            path: '/list-projects',
            name: 'list-projects',
            component: ListProjects,
        }
    ]
})

export default router;