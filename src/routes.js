import Profile from './pages/Profile.vue';
import Authorization from './pages/Authorization.vue';
import { createWebHistory, createRouter } from "vue-router";


const routes = [
    { path: '/', component: Profile },
    { path: '/login', component: Authorization },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
  
export default router;