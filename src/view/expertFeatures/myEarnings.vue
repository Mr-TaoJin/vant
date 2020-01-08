<template>
  <div>
    <!-- <Header></Header> -->
    <div class="main_box">
      <div class="residue_box">
        <div class="top">
          <van-row type="flex" align="center">
            <van-col span="12">
              <div class="t1">我的收益</div>
            </van-col>
            <van-col span="12" class="tr">
              <van-icon @click="isDialog" class="qes" name="question" />
            </van-col>
          </van-row>
          <van-row type="flex" align="center">
            <van-col span="12">
              <div class="t2">￥2088.33</div>
            </van-col>
            <van-col span="12" class="tr">
              <router-link :to="{path:'/recharge',query:{}}">
                <span class="t3">提现</span>
              </router-link>
            </van-col>
          </van-row>
        </div>
        <div class="content">
          <van-cell>
            <van-row class="list" type="flex" align="center">
              <van-col span="12">
                <span>时间</span>
              </van-col>
              <van-col span="6" class="tc">
                <span>项目</span>
              </van-col>
              <van-col span="6" class="tr">
                <span>金额</span>
              </van-col>
            </van-row>
          </van-cell>
          <van-cell>
            <van-row class="list" type="flex" align="center">
              <van-col span="12">
                <span>2019-03-23 12:22</span>
              </van-col>
              <van-col span="6" class="tc">
                <span>中奖佣金</span>
              </van-col>
              <van-col span="6" class="tr">
                <span :class="{'red':false,'green':true}">-2元</span>
              </van-col>
            </van-row>
          </van-cell>
          <van-cell>
            <van-row class="list" type="flex" align="center">
              <van-col span="12">
                <span>2019-03-23 12:22</span>
              </van-col>
              <van-col span="6" class="tc">
                <span>方案销售</span>
              </van-col>
              <van-col span="6" class="tr">
                <span :class="{'red':true,'green':false}">-2元</span>
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
  name: "myEarnings",
  data() {
    return {};
  },
  methods: {
    isDialog() {
      this.$dialog
        .alert({
          title: "提示",
          confirmButtonText: "我知道了",
          message:
            "1、我的收益由销售额的30%+中奖佣金（2%）构成，每满100元可以提现"
        })
        .then(() => {
          // on close
        });
    }
  }
};
</script>
<style lang="less" scoped>
.residue_box {
  padding-top: 10px;
  .top {
    padding: 10px;
    background: #ffffff;
    font-size: 14px;
    .qes {
      font-size: 20px;
      color: #0099ff;
    }
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