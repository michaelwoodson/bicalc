import Vue from 'vue';
import 'todomvc-app-css/index.css';

import App from './app/containers/App.vue';
import store from './app/store/index';

export default new Vue({
  el: '#root',
  store,
  render: h => h(App)
});
