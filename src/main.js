import App from './App.vue'
import router from './routes'
import './index.css'
import {store} from './store';
import { createApp } from 'vue'
// new Vue({
//     el: '#app',
//     store,
//     router,
//     render: h => h(App),
//   });

// createApp({
//     el: '#app',
//     store,
//     router,
//     render: h => h(App),
// }).use(router).mount('#app')
const app = createApp(App);
app.use(store);
app.use(router);
app.mount('#app');
