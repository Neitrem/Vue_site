import {createRouter ,createWebHistory } from 'vue-router'
//import {createWebHistory} from 'vue-webhistory'
import StartPage from '@/pages/StartPage'

const routes = [
    {
        path: '/',
        component: StartPage
    }
]

const router = createRouter({
    routes,
    history: createWebHistory (process.env.BASE_URL)
})

export default router;