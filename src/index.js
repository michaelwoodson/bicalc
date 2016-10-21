import Vue from 'vue';

import 'bootstrap/dist/css/bootstrap.min.css';
import {accordion, alert, panel} from 'vue-strap';

import App from './app/App.vue';
import store from './app/store/index';
import numeral from 'numeral';

Vue.filter('nicenumber', value => {
  return numeral(value).format('0.0a');
});

Vue.filter('money', value => {
  return numeral(value).format('0,0');
});

Vue.component('accordion', accordion);
Vue.component('alert', alert);
Vue.component('panel', panel);

export default new Vue({
  el: '#root',
  store,
  render: h => h(App)
});
