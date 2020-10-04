import Vue from 'vue';
import App from './components/App.vue';
import axios from 'axios';
import vueaxios from 'vue-axios';
import route from './router.js'

Vue.use(axios, vueaxios);

new Vue({
    render: h =>h(App),
    router: route
}).$mount('#app')
