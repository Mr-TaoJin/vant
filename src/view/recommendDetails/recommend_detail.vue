<template>
  <div>
    <!-- <Header></Header> -->
    <div class="main_box">
      <div class="recommend_detail_box">
        <div class="top_box">
          <div class="up">
            <div class="tit">冲击8连红！今日一场英冠单关推荐，布莱克VS本订</div>
            <van-row class type="flex" align="center">
              <van-col span="12">
                <span class="tit_one">14:55发布</span>
              </van-col>
              <van-col span="12" class="tr">
                <span class="tit_two">
                  <van-icon class="eye" name="eye-o" />
                  <span>183人查看</span>
                </span>
              </van-col>
            </van-row>
          </div>
          <div class="list_game_box">
            <van-cell>
              <van-row class="top" type="flex" align="center">
                <van-col>
                  <img src="@/assets/home/game.png" alt />
                </van-col>
                <van-col span="20">
                  <div>
                    <span class="tit_one">超级大神</span>
                    <span class="tit_two">近10中8</span>
                  </div>
                  <div>
                    <span class="tit_one">分析达人人人人人人人</span>
                  </div>
                </van-col>
                <van-col span="6" class="tr">
                  <span class="tit_three">关注</span>
                </van-col>
              </van-row>
            </van-cell>
          </div>
        </div>
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
              <img v-if="false" src="@/assets/common/lock.png" alt />
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
          <div class="rec_box">
            <div class="title">推荐理由</div>
            <div class="cont">
              布莱克本状态实在是太好了！布莱克本状态实在是太好了
              反反复复布莱克本状态实在是太好了布莱克本状态实在是
              好了布莱克本状布莱克本状态实在是太好了布莱克本状态实
              在是太好了布莱克本状态实在是太好了！
            </div>
          </div>
        </div>
        <!-- 底部 -->
        <div class="footer_box">
          <div v-if="true">
            <van-row class="tc" type="flex" align="center">
              <van-col span="12">
                <div class="tl">
                  <span class="tit1">需支付50.00</span>
                  <span class="tit2">不中退款</span>
                </div>
              </van-col>
              <van-col class="tit3" span="6">
                <div>跟单</div>
              </van-col>
              <van-col class="tit4" span="6">
                <div @click="showPopup">支付</div>
              </van-col>
            </van-row>
          </div>
          <div v-else>
            <div class="tit5">联系店主跟单</div>
          </div>
        </div>
      </div>

      <!-- 弹窗 -->
      <van-popup v-model="show" closeable round position="bottom">
        <div class="popup_box">
          <div class="cont1">待支付</div>
          <div class="cont2">38.00</div>
          <div class="c_box">
            <span class="cont3">账户余额：</span>
            <span class="cont4">10.00</span>
          </div>
          <div class="cont5">本单支付后账户余额剩余：0.00，还需支付38元</div>
          <div class="cont6">继续支付剩余38元</div>
        </div>
      </van-popup>
    </div>
  </div>
</template>
<script>
export default {
  name: "recommend_detail",
  data() {
    return {
      show: true
    };
  },
  methods: {
    showPopup() {
      this.show = true;
    }
  }
};
</script>
<style lang="less" scoped>
.recommend_detail_box {
  .top_box {
    background: #ffffff;
    .up {
      border-bottom: 1px solid #bfbfbf;
      padding: 10px;
      .tit {
        font-size: 18px;
        font-weight: bold;
      }
      .tit_one,
      .tit_two {
        color: #bfbfbf;
        .eye {
          font-size: 14px;
          vertical-align: middle;
          margin-right: 6px;
        }
        font-size: 12px;
      }
    }
  }
  .list_game_box {
    border-top: 2px solid #f5f5f5;
    .top {
      img {
        width: 52px;
        height: 52px;
        border-radius: 50%;
        vertical-align: middle;
      }
      .tit_one {
        font-size: 14px;
        margin-left: 8px;
      }
      .tit_two {
        font-size: 12px;
        margin-left: 8px;
        background: #ff0000;
        color: #fff;
        padding: 1px 8px;
        border-radius: 30px;
      }
      .tit_three {
        font-size: 14px;
        margin-left: 8px;
        background: #ff0000;
        color: #fff;
        padding: 1px 8px;
        border-radius: 30px;
      }
    }
  }
  .mid_box {
    margin-top: 10px;
    margin-bottom: 50px;
    padding-bottom: 1px;
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
    .title {
      padding-bottom: 10px;
      font-size: 14px;
      font-weight: bold;
    }
    .cont {
      font-size: 12px;
    }
  }
  .footer_box {
    position: fixed;
    background: #ffffff;
    bottom: 0;
    width: 100%;
    font-size: 0.37333rem;
    .tit1 {
      font-size: 12px;
      margin-left: 10px;
    }
    .tit2 {
      font-size: 12px;
      color: #fff;
      background: #ff9900;
      padding: 4px 8px;
      margin-left: 10px;
      border-radius: 50px;
    }
    .tit3 {
      font-size: 13px;
      padding: 20px 20px;
      background: #ff9900;
      color: #ffffff;
    }
    .tit4 {
      font-size: 13px;
      font-size: 13px;
      padding: 20px 30px;
      background: #ff0000;
      color: #ffffff;
    }
    .tit5 {
      font-size: 13px;
      padding: 20px 20px;
      background: #ff9900;
      color: #ffffff;
      text-align: center;
    }
  }
}
// 弹窗样式
.popup_box {
  font-size: 12px;
  .cont1 {
    font-size: 14px;
    color: #bfbfbf;
    padding: 8px 20px;
  }
  .cont2 {
    font-size: 28px;
    font-weight: bold;
    padding: 0px 20px;
  }
  .cont3 {
    font-size: 14px;
    font-weight: bold;
  }
  .cont4 {
    font-size: 14px;
    font-weight: bold;
    color: #ff0000;
  }
  .cont5 {
    font-size: 14px;
    color: #bfbfbf;
    padding: 8px 20px;
  }
  .cont6 {
    text-align: center;
    font-size: 14px;
    color: #289d47;
    padding: 10px 0;
    border-top: 1px solid #bfbfbf;
    padding: 20px 20px;
  }
  .c_box {
    padding: 8px 20px;
  }
}
</style>