import Vue from 'vue';

import BootstrapVue from 'bootstrap-vue';

import App from './app/App.vue';
import store from './app/Store';
import numeral from 'numeral';

Vue.filter('nicenumber', value => {
  return numeral(value).format('0.0a');
});

Vue.filter('money', value => {
  return numeral(value).format('0,0');
});

Vue.use(BootstrapVue);

export default new Vue({
  el: '#root',
  store,
  render: h => h(App)
});
