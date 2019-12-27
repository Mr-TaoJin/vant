import 'amfe-flexible';
import 'babel-polyfill'
import Vue from 'vue';
import App from './App';
import { router } from './router';
import store from './store'
import Storage from 'vue-ls'
Vue.use(Storage)
new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
});
