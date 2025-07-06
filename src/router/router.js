import { createRouter, createWebHistory } from 'vue-router'
import HeroSection from '../components/Sections/Home/HeroSection.vue';
const routes = [
    { path: '/', redirect: '/home' },
    { path: '/home', component: HeroSection },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;