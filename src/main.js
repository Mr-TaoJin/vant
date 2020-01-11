import 'amfe-flexible';
import 'babel-polyfill'
import Vue from 'vue';
import App from './App';
import { router } from './router';
import store from './store'
import Storage from 'vue-ls'
import {
  NavBar,
  Tabbar,
  TabbarItem,
  Toast,
  Row,
  Col,
  Swipe,
  SwipeItem,
  Icon,
  List,
  Cell,
  Tab,
  Tabs,
  Search,
  Popup,
  Stepper,
  Dialog,
  Button,
  Calendar,
  Field,
  CellGroup,
  Uploader,
  Overlay,
  Switch,
} from 'vant';
Vue.use(NavBar)
  .use(Tabbar)
  .use(TabbarItem)
  .use(Toast)
  .use(Row)
  .use(Col)
  .use(Swipe)
  .use(SwipeItem)
  .use(Icon)
  .use(List)
  .use(Cell)
  .use(Tab)
  .use(Tabs)
  .use(Search)
  .use(Popup)
  .use(Stepper)
  .use(Dialog)
  .use(Button)
  .use(Calendar)
  .use(Field)
  .use(CellGroup)
  .use(Uploader)
  .use(Overlay)
  .use(Switch)


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
