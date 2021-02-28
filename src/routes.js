import FlexBoxes from '../src/components/FlexBoxes.vue';
import Authorization from '../src/auth/Authorization.vue';
import { createWebHistory, createRouter } from "vue-router";


const routes = [
    { path: '/', component: FlexBoxes },
    { path: '/login', component: Authorization },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
  
export default router;