// MAIN //
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import {
    store
} from './store';

// PLUGINS //
import './plugins/markdown';
import './plugins/vuetify';

// CONFIGS //
Vue.config.productionTip = false;

// INSTANCE //
new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
