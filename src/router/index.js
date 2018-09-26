import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import Dash from '@/views/Dash'
import AppRepo from '@/components/AppRepo'

Vue.use(Router);

export default new Router({
    routes: [{
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/dash',
            name: 'Dash',
            component: Dash
        },
        {
            path: '/:repo',
            name: 'AppRepo',
            component: AppRepo,
        }
    ]
});
