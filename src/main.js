// MAIN IMPORTS //
import Vue from 'vue'
import App from './App'
import router from './router'

// CUSTOM //
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VueMarkdown from 'vue-markdown'

Vue.use(Vuetify)
Vue.use(VueMarkdown)

// CONFIGS //
Vue.config.productionTip = false

// CREATE MAIN VUE INSTANCE //
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
