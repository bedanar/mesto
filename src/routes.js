import FlexBoxes from '../src/components/FlexBoxes.vue';
import { createWebHistory, createRouter } from "vue-router";
const routes = [
    { path: '/', component: FlexBoxes },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
  
export default router;