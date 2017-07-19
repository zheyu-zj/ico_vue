import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../pages/index/index.vue'),
        },
        {
            path: '/ico',
            name: 'ico',
            component: () => import('../pages/ico/index.vue'),
        },
        {
            path: '/trading',
            name: 'trading',
            component: () => import('../pages/trading/index.vue'),
        },
        {
            path: '/coinLock',
            name: 'coinLock',
            component: () => import('../pages/coinLock/index.vue'),
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../pages/login/index.vue'),
        },
        {
            path: '/register',
            name: 'register',
            component: () => import('../pages/register/index.vue'),
        },
        {
            path: '/ico/:id',
            name: 'icoChildren',
            component: () => import('../pages/ico/children/index.vue'),
        }
    ]
})