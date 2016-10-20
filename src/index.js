import Vue from 'vue';

import App from './app/containers/App.vue';
import store from './app/store/index';
import numeral from 'numeral';
console.log(numeral(3200000000000).format('0.0a'));

Vue.filter('nicenumber', value => {
  return numeral(value).format('0.0a');
});

Vue.filter('money', value => {
  return numeral(value).format('0,0');
});

export default new Vue({
  el: '#root',
  store,
  render: h => h(App)
});
