import { createApp } from 'vue'
import App from './App.vue'
import router from '@/components/router/router'
import store from '@/store';

const app = createApp(App)

var
 cors = require(
'cors'
 )

app
    .use(cors())
    .use(router)
    .use(store)
    .mount('#app');