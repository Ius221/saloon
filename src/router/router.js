import { createRouter, createWebHistory } from 'vue-router'
import HeroSection from '../components/Sections/HeroSection.vue';
const routes = [
    { path: '/', component: HeroSection },
    { path: '/home', component: HeroSection },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;