<template>
  <div>
    <!-- <Header></Header> -->
    <div class="main_box">
      <div class="recommend_detail_box">
        <div class="top_box">
          <div class="list_game_box">
            <van-cell>
              <van-row class="top" type="flex" align="center">
                <van-col>
                  <img src="@/assets/home/game.png" alt />
                </van-col>
                <van-col span="20">
                  <div>
                    <span class="tit_one">龙眼1号</span>
                    <span class="tit_two">近10中8</span>
                    <span class="tit_two">3连红</span>
                  </div>
                  <div>
                    <span class="tit_four">1528 粉丝</span>
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
          <van-row type="flex" align="center">
            <van-col span="10" class="red_color">百元奖金: 205.56</van-col>
            <van-col span="14" class="tr">
              <div class="time">
                <van-icon class="ti" name="underway-o" />
                <span>1小时55分25秒后截止</span>
              </div>
            </van-col>
          </van-row>
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
        </div>
        <!-- 底部 -->
        <div class="footer_box">
          <div>
            <div class="tit5">跟单</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "optimization_recommend_detail",
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
        .tit_four {
          font-size: 14px;
          margin-left: 8px;
          color: #bfbfbf;
        }
      }
    }
  }
  .mid_box {
    margin-top: 10px;
    background: #ffffff;
    .red_color{
      font-size: 12px;
      color:#ff0000;
    }
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
      box-sizing: border-box;
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

  .footer_box {
    position: fixed;
    background: #ffffff;
    bottom: 0;
    width: 100%;
    font-size: 0.37333rem;
    .tit5 {
      font-size: 13px;
      padding: 20px 20px;
      background: #ff9900;
      color: #ffffff;
      text-align: center;
    }
  }
}
</style>