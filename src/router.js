import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
/* eslint-disable */
/* jscs:disable */
Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        // {
        //     path: '/about',
        //     name: 'about',
        //     // route level code-splitting
        //     // this generates a separate chunk (about.[hash].js) for this route
        //     // which is lazy-loaded when the route is visited.
        //     // more info https://router.vuejs.org/guide/advanced/lazy-loading.html#grouping-components-in-the-same-chunk
        //     component: () => import ( /* webpackChunkName: "about" */ './views/About.vue')
        // }
    ]
});
