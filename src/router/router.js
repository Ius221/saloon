import { createRouter, createWebHistory } from 'vue-router'
import HeroSection from '../components/Sections/Home/HeroSection.vue';
import ManicureHero from '../components/Sections/Manicure/HeroSection.vue';
const routes = [
    { path: '/', redirect: '/home' },
    { path: '/home', component: HeroSection },
    { path: '/manicure', redirect: '/about' },
    { path: '/about', component: ManicureHero }, // Placeholder - replace with actual component
    { path: '/portfolios', component: HeroSection }, // Placeholder - replace with actual component
    { path: '/blog', component: HeroSection }, // Placeholder - replace with actual component
    { path: '/pages', component: HeroSection }, // Placeholder - replace with actual component
    { path: '/contacts', component: HeroSection }, // Placeholder - replace with actual component
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        // If there's a saved position (back/forward navigation), restore it
        if (savedPosition) {
            return savedPosition;
        }

        // If navigating to the same route with different hash, scroll to that element
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth'
            };
        }

        // For new navigation, scroll to top smoothly
        return {
            top: 0,
            behavior: 'smooth'
        };
    }
})

export default router;