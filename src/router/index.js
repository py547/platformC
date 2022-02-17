//路由相关

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../page/Home/home.vue'
import Collections from '../page/Collections/collections.vue'
import Analysis from '../page/Analysis/analysis.vue'
import Time from '../page/Time/time.vue'
const routes= [
    //页面路由配置
    {
        path: '/home',
        component: Home
    },
    {
        path: '/collections',
        component: Collections
    },
    {
        path: '/analysis',
        component: Analysis
    },
    {
        path: '/time',
        component: Time
    },
    {
        path: '/',
        redirect: '/home'
    },
  ]

export default createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})