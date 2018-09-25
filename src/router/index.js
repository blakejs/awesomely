import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import AppRepo from '@/components/AppRepo'

Vue.use(Router);

export default new Router({
    routes: [{
        path: '/',
        name: 'Home',
        component: Home,
    }, {
        path: '/:repo',
        name: 'AppRepo',
        component: AppRepo,
    }]
});
