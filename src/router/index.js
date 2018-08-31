import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/AppHome';

Vue.use(Router);

export default new Router({
    // prettier-ignore
    routes: [{
        path: '/',
        name: 'Home',
        component: Home,
    }, ]
});
