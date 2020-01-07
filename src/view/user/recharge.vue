<template>
  <div>
    <!-- <Header></Header> -->
    <div class="main_box">
      <div class="recharge_box">
        <div class="top">账户余额：100:00</div>
        <div class="content">
          <div class="title">选择充值金额</div>
          <van-row gutter="20"
                   class="tc">
            <van-col class="v_col"
                     span="8">
              <div>100.00</div>
            </van-col>
            <van-col class="v_col"
                     span="8">
              <div class="checked">200.00</div>
            </van-col>
            <van-col class="v_col"
                     span="8">
              <div>300.00</div>
            </van-col>
            <van-col class="v_col"
                     span="8">
              <div>400.00</div>
            </van-col>
            <van-col class="v_col"
                     span="8">
              <div>500.00</div>
            </van-col>
          </van-row>
          <van-button class="btn"
                      type="primary"
                      color="#ff9900"
                      block>充值</van-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "recharge",
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="less" scoped>
.recharge_box {
  .top {
    padding: 10px;
    background: #ffffff;
    font-size: 16px;
    font-weight: bold;
    margin: 10px;
    border-radius: 8px;
  }
  .content {
    padding: 10px;
    background: #ffffff;
    font-size: 16px;
    margin: 10px;
    border-radius: 8px;
    box-sizing: border-box;
    .v_col {
      box-sizing: border-box;
      margin-top: 15px;
      div {
        padding: 5px 10px;
        border: 1px solid#ff9900;
        border-radius: 30px;
      }
      .checked {
        color: #ffffff;
        background: #ff9900;
      }
    }
    .btn {
      border-radius: 50px;
      margin-top:30px;
    }
  }
}
</style>