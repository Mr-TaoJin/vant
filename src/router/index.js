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
const recommend_detail_small = () => import(/* webpackChunkName: "recommend_detail_small" */'@/view/recommendDetails/recommend_detail_small')//小站店主推荐详情
const recommend_detail_common = () => import(/* webpackChunkName: "recommend_detail_common" */'@/view/recommendDetails/recommend_detail_common')//普通店主推荐详情
const recommend_detail_expert = () => import(/* webpackChunkName: "recommend_detail_expert" */'@/view/recommendDetails/recommend_detail_expert')//专家推荐详情
const optimization = () => import(/* webpackChunkName: "optimization" */'@/view/optimization/optimization')//2.0优选
const optimization_recommend_detail = () => import(/* webpackChunkName: "optimization" */'@/view/optimizationDetails/optimization_recommend_detail')//优选推荐详情
const optimization_expert_detail = () => import(/* webpackChunkName: "optimization" */'@/view/optimizationDetails/optimization_expert_detail')//专家推荐详情
const free = () => import(/* webpackChunkName: "optimization" */'@/view/free/free')//免费
const ranking = () => import(/* webpackChunkName: "ranking" */'@/view/ranking/ranking')//排行榜
const focusGame = () => import(/* webpackChunkName: "focusGame" */'@/view/focusGame/focusGame')//焦点赛事
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
  {
    name: 'recommend_detail_small',
    component: recommend_detail_small,
    meta: {
      title: '推荐详情',
      isleftarrow: true,
      isrightarrow: true
    }
  },
  {
    name: 'recommend_detail_common',
    component: recommend_detail_common,
    meta: {
      title: '推荐详情',
      isleftarrow: true,
      isrightarrow: true
    }
  },
  {
    name: 'recommend_detail_expert',
    component: recommend_detail_expert,
    meta: {
      title: '推荐详情',
      isleftarrow: true,
      isrightarrow: true
    }
  },
  {
    name: 'optimization',
    component: optimization,
    meta: {
      title: '2.0优选',
      isleftarrow: true,
      isrightarrow: true
    }
  },
  {
    name: 'optimization_recommend_detail',
    component: optimization_recommend_detail,
    meta: {
      title: '推荐详情',
      isleftarrow: true,
      isrightarrow: true
    }
  },
  {
    name: 'optimization_expert_detail',
    component: optimization_expert_detail,
    meta: {
      title: '推荐详情',
      isleftarrow: true,
      isrightarrow: true
    }
  },
  {
    name: 'free',
    component: free,
    meta: {
      title: '免费专区',
      isleftarrow: true,
      isrightarrow: true
    }
  },
  {
    name: 'ranking',
    component: ranking,
    meta: {
      title: '排行榜',
      isleftarrow: true,
      isrightarrow: true
    }
  },
  {
    name: 'focusGame',
    component: focusGame,
    meta: {
      title: '焦点赛事',
      isleftarrow: true,
      isrightarrow: true
    }
  },
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
