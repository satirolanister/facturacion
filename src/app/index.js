/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */
import Vue from 'vue';
import axios from 'axios';
import vueaxios from 'vue-axios';
import App from './components/app.vue';
import route from './router.js';

Vue.use(vueaxios, axios);

new Vue({
  render: (h) => h(App),
  router: route,
}).$mount('#app');
