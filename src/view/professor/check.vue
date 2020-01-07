<template>
  <div>
    <!-- <Header></Header> -->
    <div class="check_box" v-if="status == 0">
      <img src="@/assets/home/game.png" alt />
      <div class="tit1">等待审核</div>
      <div class="tit2">已提交申请，等待后台审核</div>
    </div>
    <div class="check_box" v-if="status == 1">
      <img src="@/assets/home/game.png" alt />
      <div class="tit1">审核成功</div>
      <div class="tit2">恭喜你！成为我们的推荐大神</div>
    </div>
    <div class="check_box" v-if="status == 2">
      <img src="@/assets/home/game.png" alt />
      <div class="tit1">审核失败</div>
      <div class="tit2">别灰心~继续努力吧</div>
    </div>
    <div class="fot_box">
      <router-link :to="{path:'/user'}">
        <van-button class="btn" type="primary" color="#ff9900" block>返回个人中心</van-button>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "check",
  data() {
    return {
      status: 1
    };
  },
  methods: {}
};
</script>
<style lang="less" scoped>
.check_box {
  text-align: center;
  padding: 40px 0;
  img {
    width: 62px;
    height: 62px;
  }
  .tit1 {
    font-size: 16px;
    padding: 10px 0;
  }
  .tit2 {
    font-size: 12px;
    color: #bfbfbf;
  }
}
.fot_box {
  position: fixed;
  bottom: 0;
  right: 0;
  width: 100%;
  padding: 60px 40px;
  .btn {
    border-radius: 8px;
  }
}
</style>