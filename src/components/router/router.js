import {createRouter, createWebHistory } from 'vue-router'
import StartPage from '@/pages/StartPage'
import ListPage from '@/pages/ListPage'

const routes = [
    {
        path: '/',
        component: StartPage
    },
    {
        path: '/list',
        component: ListPage
    }
]

const router = createRouter({
    routes,
    history: createWebHistory (process.env.BASE_URL)
})

export default router;