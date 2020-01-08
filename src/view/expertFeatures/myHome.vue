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
                    <span class="tit_one">超级大神</span>
                    <!-- <span class="tit_two">近10中8</span> -->
                  </div>
                  <div>
                    <span class="tit_one">1568粉丝</span>
                  </div>
                </van-col>
                <van-col span="6" class="tr">
                  <span class="tit_three">关注</span>
                </van-col>
              </van-row>
              <div class="fon">长期从事竞彩分析工作专业分析师，国家认证彩票分析师。</div>
            </van-cell>
          </div>
        </div>
        <div class="mid_box">
          <van-row class="li_item tc" type="flex" align="center">
            <van-col span="8">
              <div>-</div>
              <div>近3天胜率</div>
            </van-col>
            <van-col span="8">
              <div>80%</div>
              <div>近3天回报率</div>
            </van-col>
            <van-col span="8">
              <div>5</div>
              <div>当前连红</div>
            </van-col>
          </van-row>
          <van-row class="li_item tc" type="flex" align="center">
            <van-col span="8">
              <div>-</div>
              <div>近3天胜率</div>
            </van-col>
            <van-col span="8">
              <div>80%</div>
              <div>近3天回报率</div>
            </van-col>
            <van-col span="8">
              <div>5</div>
              <div>当前连红</div>
            </van-col>
          </van-row>
          <div class="title">历史战绩</div>
          <div class="content">
            <span class="red">红</span>
            <span class="black">黑</span>
            <span class="red">红</span>
            <span class="black">黑</span>
            <span class="red">红</span>
            <span class="black">黑</span>
            <span class="red">红</span>
            <span class="black">黑</span>
            <span class="red">红</span>
            <span class="black">黑</span>
            <span class="red">红</span>
            <span class="black">黑</span>
          </div>
        </div>
        <div class="title_box">最新发布</div>
        <div class="new_box">
          <div>
            <span class="mode">2X1</span>
            <span>武汉高衙内今日澳超法乙2X1推荐推荐</span>
          </div>
          <van-row class="fot" type="flex" align="center">
            <van-col span="20">
              <span class="tit_one">
                <van-icon name="eye-o" />
                <span>12</span>
              </span>
              <span class="tit_two">
                <van-icon name="underway-o" />
                <span>16:02</span>
              </span>
            </van-col>
            <van-col span="4" class="tr">
              <span class="tit_three">38.00豆</span>
            </van-col>
          </van-row>
        </div>
        <div class="title_box">历史发布</div>
        <div class="new_box">
          <div>
            <span class="mode">2X1</span>
            <span>武汉高衙内今日澳超法乙2X1推荐推荐</span>
          </div>
          <van-row class="fot" type="flex" align="center">
            <van-col span="20">
              <span class="tit_one">
                <van-icon name="eye-o" />
                <span>12</span>
              </span>
              <span class="tit_two">
                <van-icon name="underway-o" />
                <span>12-05</span>
              </span>
            </van-col>
            <van-col span="4" class="tr">
              <span class="tit_four">命中</span>
            </van-col>
          </van-row>
        </div>
        <div class="new_box">
          <div>
            <span class="mode">2X1</span>
            <span>武汉高衙内今日澳超法乙2X1推荐推荐</span>
          </div>
          <van-row class="fot" type="flex" align="center">
            <van-col span="20">
              <span class="tit_one">
                <van-icon name="eye-o" />
                <span>12</span>
              </span>
              <span class="tit_two">
                <van-icon name="underway-o" />
                <span>12-05</span>
              </span>
            </van-col>
            <van-col span="4" class="tr">
              <span class="tit_four">命中</span>
            </van-col>
          </van-row>
        </div>
        <div class="new_box">
          <div>
            <span class="mode">2X1</span>
            <span>武汉高衙内今日澳超法乙2X1推荐推荐</span>
          </div>
          <van-row class="fot" type="flex" align="center">
            <van-col span="20">
              <span class="tit_one">
                <van-icon name="eye-o" />
                <span>12</span>
              </span>
              <span class="tit_two">
                <van-icon name="underway-o" />
                <span>12-05</span>
              </span>
            </van-col>
            <van-col span="4" class="tr">
              <span class="tit_four">命中</span>
            </van-col>
          </van-row>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "myHome",
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="less" scoped>
.recommend_detail_box {
  .top_box {
    background-image: url("../../assets/common/bg.png");
  }
  .list_game_box {
    .van-cell {
      background-color: transparent;
    }
    .top {
      color: #fff;
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
        background: #fff;
        color: #ff9900;
        padding: 1px 8px;
        border-radius: 30px;
      }
    }
    .fon {
      font-size: 12px;
      padding-top: 10px;
      color: #fff;
    }
  }
  .mid_box {
    background: #fff;
    font-size: 12px;
    margin-top: 10px;
    .li_item {
      .van-col > div:first-child {
        font-size: 18px;
        color: #ff0000;
        padding: 8px 0;
      }
      .van-col > div:last-child {
        color: #323232;
        padding: 8px 0;
      }
    }
    .title {
      padding: 10px;
    }
    .content {
      padding: 0 20px 0 20px;
      span {
        display: inline-block;
        font-size: 13px;
        margin-right: 10px;
        margin-bottom: 10px;
        color: #fff;
        width: 26px;
        height: 26px;
        text-align: center;
        line-height: 26px;
      }
      .red {
        background: #ff0000;
        border-radius: 50%;
      }
      .black {
        background: #000;
        border-radius: 50%;
      }
    }
  }
  .title_box {
    font-size: 14px;
    font-weight: bold;
    margin: 10px;
    padding-left: 20px;
    border-left: 3px solid #000;
  }
  .new_box {
    background: #fff;
    padding: 10px;
    font-size: 14px;
    border-bottom: 1px solid #bfbfbb;
    .mode {
      padding: 2px 10px;
      border-radius: 50px;
      background: #0066ff;
      color: #fff;
      margin-right: 10px;
    }
    .fot {
      margin-top:15px;
      font-size: 14px;
      color: #999;
      .tit_one {
        margin-right: 10px;
      }
      .tit_three {
        font-weight: bold;
        color: #ff0000;
      }
      .tit_four {
        color: #ff0000;
        display: inline-block;
        width: 42px;
        height: 42px;
        line-height: 42px;
        border:1px solid #ff0000;
        text-align: center;
        border-radius: 50%;
      }
      .van-icon {
        vertical-align: middle;
        margin-right: 6px;
      }
    }
  }
}
</style>