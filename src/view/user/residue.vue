<template>
  <div>
    <!-- <Header></Header> -->
    <div class="main_box">
      <div class="residue_box">
        <van-row class="top"
                 type="flex"
                 align="center">
          <van-col span="12">
            <div class="t1">我的余额</div>
            <div class="t2">￥2088.33</div>
          </van-col>
          <van-col span="12"
                   class="tr">
            <router-link :to="{path:'/recharge',query:{}}">
              <span class="t3">充值</span>
            </router-link>
          </van-col>
        </van-row>
        <div class="content">
          <van-cell>
            <van-row class="list"
                     type="flex"
                     align="center">
              <van-col span="12">
                <span>2019-03-23 12:22</span>
              </van-col>
              <van-col span="6"
                       class="tc">
                <span>购买方案</span>
              </van-col>
              <van-col span="6"
                       class="tr">
                <span :class="{'red':false,'green':true}">-2元</span>
              </van-col>
            </van-row>
          </van-cell>
          <van-cell>
            <van-row class="list"
                     type="flex"
                     align="center">
              <van-col span="12">
                <span>2019-03-23 12:22</span>
              </van-col>
              <van-col span="6"
                       class="tc">
                <span>购买方案</span>
              </van-col>
              <van-col span="6"
                       class="tr">
                <span :class="{'red':false,'green':true}">-2元</span>
              </van-col>
            </van-row>
          </van-cell>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "residue",
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="less" scoped>
.residue_box {
  padding-top: 10px;
  .top {
    padding: 10px;
    background: #ffffff;
    font-size: 14px;
    .t1 {
      padding: 0 0 8px 5px;
    }
    .t2 {
      font-size: 32px;
      font-weight: bold;
    }
    .t3 {
      padding: 5px 15px;
      background: #ff9900;
      color: #ffffff;
      border-radius: 30px;
    }
  }
  .content {
    padding-top: 10px;
    .van-cell {
      border-bottom: 1px solid #f5f5f5;
    }
    .red {
      color: #ff0000;
    }
    .green {
      color: #009900;
    }
  }
}
</style>