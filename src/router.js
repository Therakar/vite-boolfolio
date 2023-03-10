import { createRouter, createWebHistory } from "vue-router";

//Pages
import HomePage from './pages/HomePage.vue';
import AboutUs from './pages/AboutUs.vue';
import ListProjects from './components/ListProjects.vue';
import Contacts from './pages/ContactUs.vue';
import Page404 from './pages/Page404.vue';
import SingleProject from './pages/SingleProject.vue';

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
        },
        {
            path: '/contact-us',
            name: 'contact-us',
            component: Contacts,
        },
        {
            path: '/project/:slug',
            name: 'single-project',
            component: SingleProject,
        },
        {
            path:"/:pathMatch(.*)*", //catch all, va messa sempre per ultima
            name: "page-404",
            component: Page404,
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        // always scroll to top
        return { top: 0 }
      },
})

export default router;