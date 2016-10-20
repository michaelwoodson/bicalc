import Vue from 'vue';

import 'bootstrap/dist/css/bootstrap.min.css';
import {alert} from 'vue-strap';

import App from './app/containers/App.vue';
import store from './app/store/index';
import numeral from 'numeral';

Vue.filter('nicenumber', value => {
  return numeral(value).format('0.0a');
});

Vue.filter('money', value => {
  return numeral(value).format('0,0');
});

Vue.component('alert', alert);

export default new Vue({
  el: '#root',
  store,
  render: h => h(App)
});
