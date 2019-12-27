// import Vue from 'vue'
const getters = {
  token: state => state.user.token,
  username: state => state.user.username,
}

export default getters