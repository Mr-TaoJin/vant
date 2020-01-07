<template>
  <div>
    <!-- <Header></Header> -->
    <div class="main_box">
      <div class="store_box">
        <van-row class="list_box"
                 type="flex"
                 align="center">
          <van-col span="12">
            <div class="t1">风云彩店</div>
            <div class="t2">店主姓名：丁久旭</div>
            <div class="t3">店内余额：1000.00元</div>
          </van-col>
          <van-col span="12"
                   class="tr">
            <span class="t4">切换彩店</span>
          </van-col>
        </van-row>
        <van-row class="list_box"
                 type="flex"
                 align="center">
          <van-col span="12">
            <div class="t1">风云彩店</div>
            <div class="t2">店主姓名：丁久旭</div>
            <div class="t3">店内余额：1000.00元</div>
          </van-col>
          <van-col span="12"
                   class="tr">
            <span class="t4">切换彩店</span>
          </van-col>
        </van-row>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "switch_store",
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="less" scoped>
.store_box {
  font-size: 14px;
  padding: 10px 0;
  .list_box {
    background: #ffffff;
    padding: 10px;
    border-bottom: 1px solid #f5f5f5;
    .t1 {
      font-size: 16px;
      font-weight: bold;
    }
    .t4 {
      padding: 5px 10px;
      color: #ffffff;
      background: #ff9900;
      border-radius: 8px;
    }
  }
}
</style>