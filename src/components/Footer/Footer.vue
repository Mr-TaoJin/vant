<template>
  <van-tabbar route
              active-color="#FF9900"
              inactive-color="#000">
    <van-tabbar-item replace
                     to="/home"
                     icon="wap-home-o">首页</van-tabbar-item>
    <van-tabbar-item replace
                     to="/game"
                     icon="search">赛事</van-tabbar-item>
    <van-tabbar-item replace
                     to="/user"
                     icon="friends-o">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  components: {},

  data() {
    return {};
  },

  methods: {}
};
</script>

<style lang="less" scope>
</style>
