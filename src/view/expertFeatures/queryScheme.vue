<template>
  <div>
    <!-- <Header></Header> -->
    <div class="main_box">
      <div class="content_box">
        <div>
          <div class="game_box">
            <div class="top">周二001 大阪樱花 VS 名古吴京</div>
            <van-row gutter="20"
                     class="tc">
              <van-col span="8">
                <div class="game">
                  <div class="t1">非让球</div>
                  <div class="t2">主胜 1.75</div>
                </div>
              </van-col>
              <van-col span="8">
                <div class="game">
                  <div class="t1">非让球</div>
                  <div class="t2">主胜 1.75</div>
                </div>
              </van-col>
            </van-row>
          </div>
          <div class="game_box">
            <div class="top">周二001 大阪樱花 VS 名古吴京</div>
            <van-row gutter="20"
                     class="tc">
              <van-col span="8">
                <div class="game">
                  <div class="t1">非让球</div>
                  <div class="t2">主胜 1.75</div>
                </div>
              </van-col>
              <van-col span="8">
                <div class="game">
                  <div class="t1">非让球</div>
                  <div class="t2">主胜 1.75</div>
                </div>
              </van-col>
            </van-row>
          </div>
        </div>
        <van-row type="flex"
                 align="center">
          <van-col span="12">
            百元奖金：
          </van-col>
          <van-col class="tr fb"
                   span="12">
            201.21-253.56
          </van-col>
        </van-row>
      </div>
      <div class="content_box">
        <div v-if="true"
             class="data_box">
          <van-row type="flex"
                   align="center">
            <van-col span="9"
                     class="tr">
              <span class="t1">查看价格</span>
            </van-col>
            <van-col span="15"
                     class="tl">
              <van-stepper class="t2"
                           v-model="value"
                           input-width="80px"
                           button-size="30px" />
            </van-col>
          </van-row>
          <van-row gutter="20"
                   class="tc">
            <van-col span="5"
                     class="select_box checked">
              18.00
            </van-col>
            <van-col span="5"
                     class="select_box">
              18.00
            </van-col>
            <van-col span="5"
                     class="select_box">
              18.00
            </van-col>
            <van-col span="5"
                     class="select_box">
              18.00
            </van-col>
            <van-col span="5"
                     class="select_box">
              18.00
            </van-col>
          </van-row>
          <van-row class="switch_box"
                   type="flex"
                   align="center">
            <van-col class="sw_b">
              <van-switch size="18px"
                          v-model="checked" />
            </van-col>
            <van-col span="15">
              <span>不中退款</span>
            </van-col>
          </van-row>
        </div>
        <div v-else
             class="no_data_box">
          <van-icon class="ioc"
                    name="question-o" />
          <span>您尚未获得收费资格，点击查看</span>
          <span class="fot_blue"
                @click="isDialog">【专家升降级制度】</span>
        </div>
      </div>
      <div class="content_box">
        <van-field v-model="value2"
                   label="标题"
                   required
                   placeholder="请输入本场推荐标题" />
        <van-field v-model="message"
                   rows="2"
                   autosize
                   label="观点"
                   type="textarea"
                   maxlength="50"
                   placeholder="请输入您对本次赛事搭配的分析看法"
                   show-word-limit />
      </div>
      <!-- 底部 -->
      <div class="footer_box">
        <div>
          <div class="tit5">确认发布</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "queryScheme",
  data() {
    return {
      value: "",
      value2: "",
      checked: true,
      message: ""
    };
  },
  methods: {
    isDialog() {
      this.$dialog
        .alert({
          title: "推单赔率限制说明",
          confirmButtonText: "我知道了",
          messageAlign: "left",
          message: `竞彩足球专家升级制度

　　免费作者升级规则：(满足任何一个条件可升级)

　　1.1、免费作者一周(7天)推荐达到或者超过5单，胜率达到65%升级为收费作者。

　　1.2、免费作者一周(7天)推荐达到或者超过5单，回报率达到200%升级为收费作者。

　　注：计算周期为周一凌晨到第二周周一早上10:00前完场的方案计算，周一10:00后系统自动升级前一周的晋级作者。按照推荐第一场比赛开始时间计算，而不是按照发帖时间。比如周日下午发起一贴，比赛时间是周一，那么这个贴算做周一的单。`
        })
        .then(() => {
          // on close
        });
    }
  }
};
</script>
<style lang="less" scoped>
.content_box {
  padding: 10px;
  margin: 10px 10px 0;
  border-radius: 5px;
  background: #ffffff;
  font-size: 14px;
  .game_box {
    border-bottom: 1px solid #bfbfbf;
    margin-bottom: 10px;
    .game {
      padding: 10px 0;
      .t1 {
        font-size: 12px;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        background: #ff9900;
        color: #fff;
        padding: 5px 0;
      }
      .t2 {
        background: #f2f2f2;
        padding: 5px 0;
      }
    }
  }
  .game_box:last-child {
    border-bottom: 0;
  }
  .data_box {
    .t1 {
      padding-right: 10px;
    }
    .select_box {
      border: 1px solid #ff9900;
      margin-top: 10px;
      margin-left: 10px;
      padding: 5px;
      border-radius: 5px;
    }
    .select_box.checked {
      color: #fff;
      background: #ff9900;
    }
    .switch_box {
      margin-top: 10px;
      .sw_b {
        padding: 6px 10px 0 0;
        vertical-align: middle;
      }
    }
  }
  .no_data_box {
    padding: 10px 0;
    font-size: 12px;
    .ioc {
      font-size: 16px;
      vertical-align: middle;
      margin-right: 10px;
    }
    .fot_blue {
      color: #3399ff;
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
    padding: 15px 20px;
    background: #ff9900;
    color: #ffffff;
    text-align: center;
  }
}
</style>