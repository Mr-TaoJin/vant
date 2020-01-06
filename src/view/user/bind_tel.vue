<template>
  <div>
    <!-- <Header></Header> -->
    <div class="main_box">
      <div class="bind_box">
        <van-field v-model="phone"
                   label="手机号"
                   placeholder="请输入手机号"
                   error-message="手机号格式错误" />
        <van-field v-model="sms"
                   center
                   clearable
                   label="短信验证码"
                   placeholder="请输入短信验证码">
          <van-button slot="button"
                      size="small"
                      color="#cccccc"
                      type="primary">发送验证码</van-button>
        </van-field>
        <div class="btn">
          <van-button type="primary"
                      color="#FF9900"
                      block>绑定</van-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "share",
  data() {
    return {
      phone: "15626456226"
    };
  },
  methods: {}
};
</script>
<style lang="less" scoped>
.bind_box {
  padding-top: 10px;
  .btn {
    box-sizing: border-box;
    padding: 30px 20px 0;
  }
}
</style>