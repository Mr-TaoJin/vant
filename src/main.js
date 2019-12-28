import 'amfe-flexible';
import 'babel-polyfill'
import Vue from 'vue';
import App from './App';
import { router } from './router';
import store from './store'
import Storage from 'vue-ls'

import { NavBar, Tabbar, TabbarItem, Toast } from 'vant';
Vue.use(NavBar)
  .use(Tabbar)
  .use(TabbarItem)
  .use(Toast);


//公共组件
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
Vue.use(Header);
Vue.use(Footer);

Vue.use(Storage)
new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
});
