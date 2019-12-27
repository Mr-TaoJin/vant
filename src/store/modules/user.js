// import Vue from 'vue';
// import { getLoginAdress, login } from "@/api/login"
// import { getUserInfo } from "@/api/api"

const user = {
  state: {
    token: '11111111111111',
    username: '',
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, { username }) => {
      state.username = username
    }
  },

  actions: {
    // 登录
    // Login({ commit }, userInfo) {
    //   return new Promise((resolve, reject) => {
    //     getLoginAdress().then(res => {
    //       let redirectAdress = '';
    //       if (res.ret == 0) {
    //         redirectAdress = res.data;
    //         return redirectAdress;
    //       } else {
    //         reject(res);
    //         return false;
    //       }
    //     }).then(redirectAdress => {
    //       if (redirectAdress) {
    //         let params = {
    //           username: userInfo.username.trim(),
    //           password: Base64.encode(Md5(userInfo.password.trim()))
    //         };
    //         login(redirectAdress, params).then(response => {
    //           if (response.data.ret == 0) {
    //             Vue.ls.set(ACCESS_TOKEN, response.data.data, 7 * 24 * 60 * 60 * 1000)
    //             commit('SET_TOKEN', response.data.data)
    //             resolve(response.data)
    //           } else {
    //             reject(response)
    //           }
    //         })
    //       }
    //     }).catch(error => {
    //       reject(error)
    //     })

    //   })
    // },
    // // 获取用户信息
    // GetInfo({ commit, state }) {
    //   return new Promise((resolve, reject) => {
    //     getUserInfo({}).then(res => {
    //       let userInfo = res.data;
    //       Vue.ls.set(USER_NAME, userInfo.userName, 7 * 24 * 60 * 60 * 1000);
    //       Vue.ls.set(USER_INFO, userInfo, 7 * 24 * 60 * 60 * 1000);
    //       commit('SET_INFO', userInfo);
    //       commit('SET_AVATAR', avatar);
    //       commit('SET_NAME', { username: userInfo.userName, realname: userInfo.userName, welcome: welcome() });
    //       resolve(userInfo)
    //     }).catch(error => {
    //       reject(error)
    //     })
    //   })
    // },

    // // 登出
    // LogOut({ commit, state }) {
    //   return new Promise((resolve, reject) => {
    //       commit('SET_TOKEN', '')
    //       commit('SET_NAME', {})
    //       Vue.ls.remove(ACCESS_TOKEN)
    //       resolve()
    //   })
    // }

  }
}

export default user