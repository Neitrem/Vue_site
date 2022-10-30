import {createRouter, createWebHistory } from 'vue-router'
import StartPage from '@/pages/StartPage'
import ListPage from '@/pages/ListPage'
import AboutPage from '@/pages/AboutPage'

const routes = [
    {
        path: '/',
        name: "main",
        component: StartPage
    },
    {
        path: '/list',
        name: "list",
        component: ListPage,
        props: true
    },
    {
        path: "/about",
        name: "about",
        component: AboutPage
    }
]

const router = createRouter({
    routes,
    history: createWebHistory (process.env.BASE_URL)
})

export default router;