<template>
  <div>
    <!-- <Header></Header> -->
    <div class="img_box">
      <img src="@/assets/common/bg.png" alt />
      放图片
    </div>
    <div class="btn_box">
      <router-link :to="{path:'/become_boss'}">
        <van-button class="btn" type="primary" color="#ff9900" block>申请成为大神</van-button>
      </router-link>
      <router-link :to="{path:'/become_professor'}">
        <van-button class="btn" type="primary" color="#ff9900" block>我是体彩店主</van-button>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "recruit",
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="less" scoped>
.img_box {
  box-sizing: border-box;
  padding: 20px;
  img {
    width: 100%;
  }
}
.btn_box {
  position: fixed;
  bottom: 100px;
  text-align: center;
  width: 100%;
  padding: 0 40px;
  .btn {
    margin-top: 20px;
    border-radius: 30px;
  }
}
</style>