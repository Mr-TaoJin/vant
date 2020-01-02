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
        <div class="content_box">
          <div class="mid">
            <div class="font_row">
              <van-row type="flex" align="center">
                <van-col span="16" class="font_one">001 尤文图斯 VS 维岗</van-col>
                <van-col span="8" class="font_two tr">西甲 03:45</van-col>
              </van-row>
              <div class="font_three">胜1.46 平3.25 （博热）</div>
            </div>
            <div class="font_row">
              <van-row type="flex" align="center">
                <van-col span="16" class="font_one">001 尤文图斯 VS 维岗</van-col>
                <van-col span="8" class="font_two tr">西甲 03:45</van-col>
              </van-row>
              <div class="font_three">胜1.46 平3.25 （博热）</div>
            </div>
          </div>
          <div class="fot">
            <van-row type="flex" align="center">
              <van-col span="10">
                <span class="red_color">百元奖金: 205.56</span>
              </van-col>
              <van-col span="14" class="tr">
                <van-icon class="time" name="underway-o" />
                <span class="tit_four">1小时55分25秒后截止</span>
              </van-col>
            </van-row>
          </div>
        </div>
        <div class="title_box">历史发布</div>
         <div class="content_box">
          <div class="mid">
            <div class="font_row">
              <van-row type="flex" align="center">
                <van-col span="16" class="font_one">001 尤文图斯 VS 维岗</van-col>
                <van-col span="8" class="font_two tr">西甲 03:45</van-col>
              </van-row>
              <div class="font_three red_color">胜1.46 平3.25 （博热）</div>
            </div>
            <div class="font_row">
              <van-row type="flex" align="center">
                <van-col span="16" class="font_one">001 尤文图斯 VS 维岗</van-col>
                <van-col span="8" class="font_two tr">西甲 03:45</van-col>
              </van-row>
              <div class="font_three">胜1.46 平3.25 （博热）</div>
            </div>
            <div v-if="false" class="checked">命中</div>
            <div v-else class="nochecked">未中</div>
          </div>
          <div class="fot">
            <van-row type="flex" align="center">
              <van-col span="10">
                <span class="gray">百元奖金: 205.56</span>
              </van-col>
              <van-col span="14" class="tr">
                <van-icon class="time" name="underway-o" />
                <span class="tit_four">1小时55分25秒后截止</span>
              </van-col>
            </van-row>
          </div>
        </div>
        <div class="content_box">
          <div class="mid">
            <div class="font_row">
              <van-row type="flex" align="center">
                <van-col span="16" class="font_one">001 尤文图斯 VS 维岗</van-col>
                <van-col span="8" class="font_two tr">西甲 03:45</van-col>
              </van-row>
              <div class="font_three red_color">胜1.46 平3.25 （博热）</div>
            </div>
            <div class="font_row">
              <van-row type="flex" align="center">
                <van-col span="16" class="font_one">001 尤文图斯 VS 维岗</van-col>
                <van-col span="8" class="font_two tr">西甲 03:45</van-col>
              </van-row>
              <div class="font_three red_color">胜1.46 平3.25 （博热）</div>
            </div>
            <div v-if="true" class="checked">命中</div>
            <div v-else class="nochecked">未中</div>
          </div>
          <div class="fot">
            <van-row type="flex" align="center">
              <van-col span="10">
                <span class="gray">百元奖金: 205.56</span>
              </van-col>
              <van-col span="14" class="tr">
                <van-icon class="time" name="underway-o" />
                <span class="tit_four">1小时55分25秒后截止</span>
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
  name: "optimization_expert_detail",
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
  .content_box {
    background: #fff;
    padding: 10px 10px;
    border-top: 1px solid #f5f5f5;
    .red_color {
      color: #ff0000;
    }
    .mid {
      position: relative;
      font-size: 14px;
      .font_row {
        padding: 10px 10px 0;
        background: #f2f2f2;
        .font_two {
          color: #bfbfbf;
        }
        .font_three {
          padding-top: 5px;
          color: #323232;
          font-weight: bold;
        }
        .red_color {
          color: #ff0000;
        }
      }
      .font_row:last-child {
        padding-bottom: 10px;
      }
      .checked{
        position: absolute;
        transform: translate(-50%,-50%);
        top:50%;
        right: 25%;
        border:1px solid #ff0000;
        color:#ff0000;
        width: 42px;
        height: 42px;
        border-radius: 50%;
        font-size: 16px;
        text-align: center;
        line-height: 42px;
      }
      .nochecked
        {
        position: absolute;
        transform: translate(-50%,-50%);
        top:50%;
        right: 25%;
        border:1px solid #323232;
        color:#323232;
        width: 42px;
        height: 42px;
        border-radius: 50%;
        font-size: 16px;
        text-align: center;
        line-height: 42px;
      }
      
    }
    .fot {
      font-size: 12px;
      padding-top: 10px;
      .time {
        vertical-align: middle;
        margin-right: 6px;
      }
      .tit_four {
        color: #bfbfbf;
      }
      .gray {
        color: #bfbfbf;
      }
    }
  }
}
</style>