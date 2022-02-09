//路由相关

import Vue from 'vue'
import Router from 'vue-router'
import Home from '../page/Home/home.vue'
import Collections from '../page/Collections/collections.vue'
import Analysis from '../page/Analysis/analysis.vue'
import Time from '../page/Time/time.vue'
Vue.use(Router)

export default new Router({
    routes: [
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

    ]
})