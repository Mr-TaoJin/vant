import 'amfe-flexible';
import 'babel-polyfill'
import Vue from 'vue';
import App from './App';
import { router } from './router';
import store from './store'
import Storage from 'vue-ls'

import { NavBar, Tabbar, TabbarItem } from 'vant';
Vue.use(NavBar).use(Tabbar).use(TabbarItem);

Vue.use(Storage)
new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
});
