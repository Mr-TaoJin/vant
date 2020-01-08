<template>
  <div>
    <!-- <Header></Header> -->
    <div class="main_box">
      <div class="search_box">
        <van-search v-model="value" placeholder="请输入搜索关键词" show-action shape="round">
          <div slot="action" @click="onSearch">
            <div class="btn">搜索</div>
          </div>
        </van-search>
      </div>
      <!-- 列表 有数据-->
      <div class="list_box">
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
            <span>方案编号：1055</span>
          </div>
          <div class="tit2">
            <span>查询价格：38.00</span>
          </div>
          <div class="tit3">
            <span>
              本次彩民跟单金额不可低于500.00，才能保证店主的利益，
              请确认和彩民已经沟通好跟单金额
            </span>
          </div>
        </div>
        <div class="notice">小贴士: 如果店主开通龙眼小站，彩民跟单金额则没有限制</div>
      </div>
      <!-- 列表 无数据-->
      <div v-if="false" class="no_data">
        <img src="@/assets/common/no_data.png" alt />
        <div>口令不正确</div>
      </div>
      <!-- 底部 -->
      <div class="footer_box">
        <div>
          <van-row class="tc" type="flex" align="center">
            <van-col span="18">
              <div class="tl">
                <span class="tit1">需支付50.00</span>
              </div>
            </van-col>
            <van-col class="tit4" span="6">
              <div @click="isDialog">支付</div>
            </van-col>
          </van-row>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "queryPlan",
  data() {
    return {
      value: "",
      list: [],
      loading: false,
      finished: false
    };
  },
  methods: {
    onSearch() {},
    isDialog() {
      this.$dialog
        .alert({
          title: "提示",
          confirmButtonText: "我知道了",
          message: "确认支付38.00？"
        })
        .then(() => {
          // on close
        });
    }
  }
};
</script>
<style lang="less" scoped>
.search_box {
  .btn {
    padding: 3px 20px;
    border-radius: 5px;
    background: #ff9900;
    color: #ffffff;
  }
}
.list_box {
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
}
.no_data {
  position: absolute;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  text-align: center;
  font-size: 14px;
  color: #e4e4e4;
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
</style>