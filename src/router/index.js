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
const bind_tel = () => import(/* webpackChunkName: "bind_tel" */'@/view/user/bind_tel')//绑定手机号
const order = () => import(/* webpackChunkName: "order" */'@/view/user/order')//我的订单
const order_detail = () => import(/* webpackChunkName: "order_detail" */'@/view/user/order_detail')//订单详情
const residue = () => import(/* webpackChunkName: "residue" */'@/view/user/residue')//我的余额
const recharge = () => import(/* webpackChunkName: "recharge" */'@/view/user/recharge')//充值
const focus = () => import(/* webpackChunkName: "focus" */'@/view/user/focus')//我的关注
const switch_store = () => import(/* webpackChunkName: "switch_store" */'@/view/user/switch_store')//切换店铺
const recruit = () => import(/* webpackChunkName: "recruit" */'@/view/professor/recruit')//招募
const become_boss = () => import(/* webpackChunkName: "become_boss" */'@/view/professor/become_boss')//成为专家
const become_professor = () => import(/* webpackChunkName: "become_professor" */'@/view/professor/become_professor')//成为专家
const check = () => import(/* webpackChunkName: "check" */'@/view/professor/check')//审核
// 专家功能（暂时不知道路由跳转 ）
const myHome = () => import(/* webpackChunkName: "check" */'@/view/expertFeatures/myHome')//我的主页
const myEarnings = () => import(/* webpackChunkName: "check" */'@/view/expertFeatures/myEarnings')//我的收益
const queryPlan = () => import(/* webpackChunkName: "check" */'@/view/expertFeatures/queryPlan')//查询方案
const selectionScheme  = () => import(/* webpackChunkName: "check" */'@/view/expertFeatures/selectionScheme')//选择方案
const queryScheme  = () => import(/* webpackChunkName: "check" */'@/view/expertFeatures/queryScheme')//确定方案
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
  {
    name: 'bind_tel',
    component: bind_tel,
    meta: {
      title: '绑定手机号',
      isleftarrow: true,
      isrightarrow: true
    }
  },
  {
    name: 'order',
    component: order,
    meta: {
      title: '我的订单',
      isleftarrow: true,
      isrightarrow: true
    }
  },
  {
    name: 'order_detail',
    component: order_detail,
    meta: {
      title: '订单详情',
      isleftarrow: true,
      isrightarrow: true
    }
  },
  {
    name: 'residue',
    component: residue,
    meta: {
      title: '我的余额',
      isleftarrow: true,
      isrightarrow: true
    }
  },
  {
    name: 'recharge',
    component: recharge,
    meta: {
      title: '充值',
      isleftarrow: true,
      isrightarrow: true
    }
  },
  {
    name: 'focus',
    component: focus,
    meta: {
      title: '我的关注',
      isleftarrow: true,
      isrightarrow: true
    }
  },
  {
    name: 'switch_store',
    component: switch_store,
    meta: {
      title: '切换店铺',
      isleftarrow: true,
      isrightarrow: true
    }
  },
  {
    name: 'recruit',
    component: recruit,
    meta: {
      title: '成为专家',
      isleftarrow: true,
      isrightarrow: true
    }
  },
  {
    name: 'become_boss',
    component: become_boss,
    meta: {
      title: '成为专家',
      isleftarrow: true,
      isrightarrow: true
    }
  },
  {
    name: 'become_professor',
    component: become_professor,
    meta: {
      title: '成为专家',
      isleftarrow: true,
      isrightarrow: true
    }
  },
  {
    name: 'check',
    component: check,
    meta: {
      title: '审核',
      isleftarrow: true,
      isrightarrow: true
    }
  },
  {
    name: 'myHome',
    component: myHome,
    meta: {
      title: '我的主页',
      isleftarrow: true,
      isrightarrow: true
    }
  },
  {
    name: 'myEarnings',
    component: myEarnings,
    meta: {
      title: '我的收益',
      isleftarrow: true,
      isrightarrow: true
    }
  },
  {
    name: 'queryPlan',
    component: queryPlan,
    meta: {
      title: '查询方案',
      isleftarrow: true,
      isrightarrow: true
    }
  },
  {
    name: 'selectionScheme',
    component: selectionScheme,
    meta: {
      title: '选择方案',
      isleftarrow: true,
      isrightarrow: true
    }
  },
  {
    name: 'queryScheme',
    component: queryScheme,
    meta: {
      title: '确定方案',
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
