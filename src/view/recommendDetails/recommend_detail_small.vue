<template>
  <div>
    <!-- <Header></Header> -->
    <div class="main_box">
      <div class="recommend_detail_box">
        <div class="mid_box">
          <div class="time">
            <van-icon class="ti" name="underway-o" />
            <span>1小时55分25秒后截止</span>
          </div>
          <div class="cont_game">
            <van-row class="tc" type="flex" align="center">
              <van-col span="6">
                <img src="@/assets/home/game.png" alt />
              </van-col>
              <van-col span="12">
                <div class="tit1">
                  <span>巴萨</span>
                  <span>vs</span>
                  <span>皇马</span>
                </div>
                <div class="tit2">西甲 周四001 12-22 03:00</div>
              </van-col>
              <van-col span="6">
                <img src="@/assets/home/game.png" alt />
              </van-col>
            </van-row>
            <div class="ret_a">
              <img v-if="true" src="@/assets/common/lock.png" alt />
              <div v-else class="win">胜 1.55</div>
            </div>
          </div>
          <div class="cont_game">
            <van-row class="tc" type="flex" align="center">
              <van-col span="6">
                <img src="@/assets/home/game.png" alt />
              </van-col>
              <van-col span="12">
                <div class="tit1">
                  <span>巴萨</span>
                  <span>vs</span>
                  <span>皇马</span>
                </div>
                <div class="tit2">西甲 周四001 12-22 03:00</div>
              </van-col>
              <van-col span="6">
                <img src="@/assets/home/game.png" alt />
              </van-col>
            </van-row>
            <div class="ret_a">
              <img v-if="false" src="@/assets/common/lock.png" alt />
              <div v-else class="win">胜 1.55</div>
            </div>
          </div>
        </div>
        <div class="rec_box">
          <div class="tit1">
            <span>小站余额：0.00</span>
          </div>
          <div class="tit2">
            <span>中奖佣金：5%</span>
            <van-icon class="icon_z" @click="isDialog" name="question-o" />
          </div>
          <div class="tit3">
            <span>您的龙眼小站余额不足，请先前往龙眼小站购卡</span>
          </div>
        </div>
        <div class="notice">
          小贴士: 此跟单方案自动同步到龙眼小站，请前往龙眼小站
          查询跟单记录
        </div>
        <!-- 底部 -->
        <div class="footer_box">
          <div v-if="true">
            <div class="z_stepper">
              <van-row type="flex" align="center">
                <van-col span="12" class="fb">过关方式：2X1</van-col>
                <van-col class="tr" span="12">
                  <van-stepper v-model="value" input-width="80px" button-size="40px" />
                </van-col>
              </van-row>
            </div>
            <van-row class="tc" type="flex" align="center">
              <van-col span="18">
                <div class="tl">
                  <div class="tit1 fb">2注 100元</div>
                  <div class="tit2">理论奖金: 423.65元</div>
                </div>
              </van-col>
              <van-col :class="{'gray':true}" class="tit4" span="6">
                <div>提交</div>
              </van-col>
            </van-row>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "recommend_detail_small",
  data() {
    return {
      value: 1,
    };
  },
  methods: {
    isDialog() {
      this.$dialog
        .alert({
          title: "提示",
          confirmButtonText:'我知道了',
          message:
            "您跟单中奖后，会从您的奖金抽取5%给发单人，在店主派奖的时候扣除，您此单的实际奖金=中奖金额-（中奖金额x5%）"
        })
        .then(() => {
          // on close
        });
    }
  }
};
</script>
<style lang="less" scoped>
.recommend_detail_box {
  padding-bottom: 50px;
  .mid_box {
    margin-bottom: 10px;
    background: #ffffff;
    .time {
      padding-top: 10px;
      font-size: 12px;
      color: #323233;
      text-align: center;
      .ti {
        vertical-align: middle;
        font-size: 14px;
        margin-right: 6px;
      }
    }
    .cont_game {
      padding: 20px;
      margin: 10px 10px;
      background: #f2f2ff;
      img {
        width: 38px;
        height: 38px;
      }
      .tit1 {
        font-size: 18px;
        font-weight: bold;
        span {
          padding: 0 5px;
        }
        span:nth-child(2) {
          font-size: 20px;
        }
      }
      .tit2 {
        font-size: 12px;
        color: #323233;
      }
      .ret_a {
        background: #ffffff;
        text-align: center;
        height: 40px;
        line-height: 40px;
        border-radius: 50px;
        margin-top: 20px;
        img {
          width: 24px;
          height: 24px;
        }
        .win {
          font-size: 14px;
          font-weight: bold;
        }
      }
    }
  }
  .rec_box {
    padding: 10px;
    background: #ffffff;
    font-size: 14px;
    color: #323232;
    .icon_z {
      vertical-align: middle;
      font-size: 18px;
      margin-left: 8px;
    }
    div {
      padding-bottom: 8px;
    }
    div:last-child {
      padding-bottom: 0;
    }
    .tit3 {
      color: #ff0000;
    }
  }
  .notice {
    font-size: 14px;
    padding: 10px;
  }
  .footer_box {
    position: fixed;
    background: #ffffff;
    bottom: 0;
    width: 100%;
    font-size: 0.37333rem;
    .z_stepper {
      padding: 10px;
    }
    .tit1 {
      font-size: 12px;
      margin-left: 10px;
    }
    .tit2 {
      font-size: 12px;
      margin-left: 10px;
    }
    .tit4 {
      font-size: 13px;
      font-size: 13px;
      padding: 20px 30px;
      background: #ff9900;
      color: #ffffff;
    }
    .tit4.gray {
      background: #cccccc;
    }
  }
}
</style>