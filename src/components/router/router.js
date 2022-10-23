import {createRouter, createWebHistory } from 'vue-router'
import StartPage from '@/pages/StartPage'
import ListPage from '@/pages/ListPage'

const routes = [
    {
        path: '/',
        name: "main",
        component: StartPage
    },
    {
        path: '/list',
        name: "ListPage",
        component: ListPage,
        props: true
    }
]

const router = createRouter({
    routes,
    history: createWebHistory (process.env.BASE_URL)
})

export default router;