import Profile from './pages/Profile.vue';
import Magiclink from './pages/Magic-link.vue'
import Authorization from './pages/Authorization.vue';
import { createWebHistory, createRouter } from "vue-router";


const routes = [
    { path: '/', component: Profile },
    { path: '/auth', component: Authorization },
    { path: '/auth/magic-link/', component: Magiclink },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
  
export default router;