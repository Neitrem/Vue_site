import { createApp } from 'vue'
import App from './App.vue'
import router from '@/components/router/router'
import store from '@/store';
import cors from 'cors'

const app = createApp(App)

app
    .use(router)
    .use(store)
    .mount('#app');