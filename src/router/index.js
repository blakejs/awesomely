import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/AppHome'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/:repo/',
    component: require('../components/RepoHome.vue'),
    props: true,
  }]
})