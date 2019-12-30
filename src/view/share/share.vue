<template>
  <div>
    <Header></Header>
    <div class="main_box">
      <div class="share_box">
        <img src="@/assets/home/logo.png" alt />
      </div>
      <div class="fot">长按图片分享给朋友</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "share",
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="less" scoped>
.share_box {
  img {
    position: absolute;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
  }
}
.fot{
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 15px 0;
    background: #FF9900;
    color:#fff;
    font-size: 14px;
    text-align: center;
}
</style>