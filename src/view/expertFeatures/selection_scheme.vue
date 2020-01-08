<template>
  <div class="selection_box">
    <div class="tab_box">
      <van-tabs v-model="active" swipeable @change="onTabChange">
        <van-tab v-for="(item,index) in tabList" :key="index" :index="index">
          <div slot="title">
            <span>{{item}}</span>
          </div>
          <!-- 赛事 -->
          <van-cell
            @click="clickArrowDirection"
            title="2018-11-31  周一  14场比赛"
            is-link
            :arrow-direction="arrowDirection"
          />
          <div class="list_box">
            <van-row type="flex" align="center">
              <van-col span="6"></van-col>
              <van-col span="18" class="tc">
                <van-row>
                  <van-col span="8" class="tit1">墨尔本城</van-col>
                  <van-col span="8">VS</van-col>
                  <van-col span="8" class="tit1">悉尼FC</van-col>
                </van-row>
              </van-col>
            </van-row>
            <van-row type="flex" align="center">
              <van-col span="6" class="tc">
                <div>周三001</div>
                <div>澳洲甲</div>
                <div>16:40截止</div>
              </van-col>
              <van-col span="18" class="tc">
                <table>
                  <tr>
                    <td>0</td>
                    <td>
                      胜 2.01
                      <!-- 不满足需求可使用图片 -->
                      <i class="sanjiao"></i>
                    </td>
                    <td>平 2.01</td>
                    <td>负 2.01</td>
                    <td rowspan="2" class="width32" @click="isShow">更多选项</td>
                  </tr>
                  <tr>
                    <td>+1</td>
                    <td>胜 2.01</td>
                    <td>平 2.01</td>
                    <td>负 2.01</td>
                  </tr>
                </table>
              </van-col>
            </van-row>
          </div>
          <div class="list_box">
            <van-row type="flex" align="center">
              <van-col span="6"></van-col>
              <van-col span="18" class="tc">
                <van-row>
                  <van-col span="8" class="tit1">墨尔本城</van-col>
                  <van-col span="8">VS</van-col>
                  <van-col span="8" class="tit1">悉尼FC</van-col>
                </van-row>
              </van-col>
            </van-row>
            <van-row type="flex" align="center">
              <van-col span="6" class="tc">
                <div>周三001</div>
                <div>澳洲甲</div>
                <div>16:40截止</div>
              </van-col>
              <van-col span="18" class="tc">
                <table>
                  <tr>
                    <td>0</td>
                    <td>
                      胜 2.01
                      <!-- 不满足需求可使用图片 -->
                      <i class="sanjiao"></i>
                    </td>
                    <td>平 2.01</td>
                    <td>负 2.01</td>
                    <td rowspan="2" class="width32" @click="isShow">更多选项</td>
                  </tr>
                  <tr>
                    <td>+1</td>
                    <td>胜 2.01</td>
                    <td>平 2.01</td>
                    <td>负 2.01</td>
                  </tr>
                </table>
              </van-col>
            </van-row>
          </div>
        </van-tab>
      </van-tabs>
    </div>
    <!-- 底部 -->
    <div class="footer_box">
      <div>
        <van-row class="tc" type="flex" align="center">
          <van-col span="18">
            <div class="tl">
              <van-icon class="ioc" name="clear" />
              <span class="tit1" @click="isDialog">推单赔率限制说明</span>
            </div>
          </van-col>
          <van-col class="tit4" span="6">
            <span>确定</span>
          </van-col>
        </van-row>
      </div>
    </div>
    <switch-store-model ref="switchModel"></switch-store-model>
  </div>
</template>
<script>
import switchStoreModel from "./modules/switchStoreModel";
export default {
  name: "selection_scheme",
  components: { switchStoreModel },
  data() {
    return {
      active: 0,
      tabList: ["竞彩足球", "竞彩篮球"],
      arrowDirection: "down"
    };
  },
  methods: {
    isShow() {
      this.$refs.switchModel.show = true;
    },
    onTabChange(tab) {},
    clickArrowDirection() {
      this.arrowDirection = this.arrowDirection == "down" ? "up" : "down";
    },
    isDialog() {
      this.$dialog
        .alert({
          title: "推单赔率限制说明",
          confirmButtonText: "我知道了",
          messageAlign: "left",
          message: `为保证大神推单用户的使用体验，现将发文时的赔率限制整理如下，请各位作者知悉并遵守。

一、推荐单场 
    1、胜平负、让球单场最多可以双选，进球数、半全场、比分最多可以选4个推荐结果； 
    2、单选赔率需大于等于1.45； 
    3、双选最低赔率需大于等于2.65； 
    4、选择三个结果，最低赔率需大于等于4； 
    5、选择四个结果，最低赔率需大于等于5.5。

二、推荐两场 
    1、推荐两场默认2串1，两场不仅需全部命中，而且需盈利才算红单。 
    2、串关推荐最低回报必须大于等于145%，竞彩、让球每场最多选择两个结果，其他玩法最多选择4个。`
        })
        .then(() => {
          // on close
        });
    }
  }
};
</script>
<style lang="less" scoped>
.selection_box {
  table {
    background: #fff;
    width: 100%;
    text-align: center; /*文本居中*/
    border-collapse: collapse; /*表格的边框合并，如果相邻，则共用一个边框*/
    border-spacing: 0; /*设置行与单元格边框的间距。当表格边框独立（即border-collapse:separate;）此属性才起作用*/
    tr {
      padding: 0;
    }
    td {
      position: relative;
      padding: 0;
      font-size: 12px;
      border-right: 1px solid #f5f5f5;
      border-bottom: 1px solid #f5f5f5;
      padding: 8px 5px;
      .sanjiao {
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        height: 0;
        border-top: 15px solid red;
        border-right: 15px solid transparent;
        font-size: 10px;
      }
    }
    .width32 {
      width: 32px;
    }
  }
  .tab_box {
    padding-bottom: 100px;
    .list_box {
      padding: 0.42667rem;
      color: #969799;
      font-size: 0.34667rem;
      line-height: 1.5;
      background-color: #f5f5f5;
      border-bottom: 1px solid #bfbfbb;
      .tit1 {
        font-size: 14px;
        font-weight: bold;
        color: #000;
      }
    }
    .list_box:last-child {
      border: 0;
    }
  }
  .footer_box {
    position: fixed;
    background: #ffffff;
    bottom: 0;
    width: 100%;
    font-size: 0.37333rem;
    .ioc {
      font-size: 30px;
      color: #bfbfbf;
      vertical-align: middle;
      margin-left: 20px;
    }
    .tit1 {
      font-size: 14px;
      margin-left: 20px;
      color: #199ed8;
    }
    .tit4 {
      padding: 20px 0;
      span {
        padding: 10px 25px;
        border-radius: 5px;
        background: #ff9900;
        color: #ffffff;
      }
    }
  }
}
</style>