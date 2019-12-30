import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
const home = () => import(/* webpackChunkName: "home" */'@/view/home/home')//首页
const game = () => import(/* webpackChunkName: "game" */'@/view/game/game')//赛事
const user = () => import(/* webpackChunkName: "user" */'@/view/user/user')//我的
const recommend = () => import(/* webpackChunkName: "recommend" */'@/view/recommend/recommend')//今日推荐
const share = () => import(/* webpackChunkName: "share" */'@/view/share/share')//分享
const search = () => import(/* webpackChunkName: "search" */'@/view/search/search')//搜素
const recommend_detail = () => import(/* webpackChunkName: "recommend_detail" */'@/view/recommendDetails/recommend_detail')//推荐详情
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
    name: 'user',
    component: user,
    meta: {
      title: '我的',
      isleftarrow: false,
      isrightarrow: false
    }
  },
  {
    name: 'recommend',
    component: recommend,
    meta: {
      title: '今日推荐',
      isleftarrow: true,
      isrightarrow: true
    }
  },
  {
    name: 'share',
    component: share,
    meta: {
      title: '分享',
      isleftarrow: true,
      isrightarrow: true
    }
  },
  {
    name: 'search',
    component: search,
    meta: {
      title: '搜索',
      isleftarrow: true,
      isrightarrow: true
    }
  },
  {
    name: 'recommend_detail',
    component: recommend_detail,
    meta: {
      title: '推荐详情',
      isleftarrow: true,
      isrightarrow: true
    }
  },
  // {
  //   name: 'cart',
  //   component: () => import('@/view/cart'),
  //   meta: {
  //     title: '购物车'
  //   }
  // },
  // {
  //   name: 'goods',
  //   component: () => import('@/view/goods'),
  //   meta: {
  //     title: '商品详情'
  //   }
  // }
];

// add route path
routes.forEach(route => {
  route.path = route.path || '/' + (route.name || '');
});

const router = new Router({ linkActiveClass: '', routes: routes });

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
