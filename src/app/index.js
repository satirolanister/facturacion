import Vue from 'vue';
import App from './components/app.vue';
import axios from 'axios';
import vueaxios from 'vue-axios';
import route from './router.js'

Vue.use(axios);
Vue.use(vueaxios);


new Vue({
    render: h =>h(App),
    router: route
}).$mount('#app')
