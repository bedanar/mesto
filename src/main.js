import App from './App.vue'
import router from './routes'
import './index.css'
import {store} from './store';
import { createApp } from 'vue'
const app = createApp(App);
app.use(store);
app.use(router);
app.mount('#app');
