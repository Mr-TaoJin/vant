import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
const home = () => import(/* webpackChunkName: "home" */'@/view/home/home')//首页
const game = () => import(/* webpackChunkName: "game" */'@/view/game/game')//赛事
const center = () => import(/* webpackChunkName: "center" */'@/view/center/center')//我的
const routes = [
  {
    path: '*',
    redirect: '/home'
  },
  {
    name: 'home',
    component: home,
    meta: {
      title: '首页',
      isleftarrow: false,
      isrightarrow: false
    }
  },
  {
    name: 'game',
    component: game,
    meta: {
      title: '赛事',
      isleftarrow: false,
      isrightarrow: false
    }
  },
  {
    name: 'center',
    component: center,
    meta: {
      title: '我的',
      isleftarrow: false,
      isrightarrow: false
    }
  },


  {
    name: 'user',
    component: () => import('@/view/user'),
    meta: {
      title: '会员中心'
    }
  },
  {
    name: 'cart',
    component: () => import('@/view/cart'),
    meta: {
      title: '购物车'
    }
  },
  {
    name: 'goods',
    component: () => import('@/view/goods'),
    meta: {
      title: '商品详情'
    }
  }
];

// add route path
routes.forEach(route => {
  route.path = route.path || '/' + (route.name || '');
});

const router = new Router({ routes });

router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title;
  if (title) {
    document.title = title;
  }
  next();
});

export {
  router
};
