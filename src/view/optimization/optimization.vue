<template>
  <div>
    <!-- <Header></Header> -->
    <div class="main_box">
      <div class="tab_box">
        <van-tabs v-model="active" swipeable @change="onTabChange">
          <van-tab v-for="(item,index) in tabList" :key="index" :index="index">
            <div slot="title">
              <span :class="{'tab_cl':active==index}">{{item}}</span>
            </div>
            <!-- 列表 -->
            <div class="game_box">
              <van-list
                v-model="loading"
                :offset="0"
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad"
              >
                <div class="list_game_box">
                  <router-link :to="{path:'/optimization_recommend_detail',query:{}}">
                    <van-cell>
                      <van-row class="top" type="flex" align="center">
                        <van-col span="20">
                          <img src="@/assets/home/game.png" alt />
                          <span class="tit_one">龙眼1号</span>
                          <span class="tit_two">近10中8</span>
                        </van-col>
                        <van-col span="4" class="tr">
                          <div class="tit_three">100%</div>
                          <div class="tit_four">命中率</div>
                        </van-col>
                      </van-row>
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
                    </van-cell>
                  </router-link>
                </div>
                <div class="list_game_box">
                  <router-link :to="{path:'/optimization_recommend_detail',query:{}}">
                    <van-cell>
                      <van-row class="top" type="flex" align="center">
                        <van-col span="20">
                          <img src="@/assets/home/game.png" alt />
                          <span class="tit_one">龙眼1号</span>
                          <span class="tit_two">近10中8</span>
                        </van-col>
                        <van-col span="4" class="tr">
                          <div class="tit_three">100%</div>
                          <div class="tit_four">命中率</div>
                        </van-col>
                      </van-row>
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
                    </van-cell>
                  </router-link>
                </div>
              </van-list>
            </div>
          </van-tab>
        </van-tabs>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "optimization",
  data() {
    return {
      active: 0,
      tabList: ["关注", "全部", "二串", "总进球", "半全场"],
      list: [],
      loading: false,
      finished: false
    };
  },
  methods: {
    onLoad() {
      console.log("11111");
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        // 加载状态结束
        this.loading = false;
        this.finished = true;
        // 数据全部加载完成
        if (this.list.length >= 100) {
          this.finished = true;
        }
      }, 2000);
    },
    onTabChange(tab) {
      this.list = [];
      this.onLoad();
    }
  }
};
</script>
<style lang="less" scoped>
.tab_box {
  .tab_cl {
    border-radius: 30px;
    padding: 2px 8px;
    background: #ff0000;
    color: #fff;
  }
}
.game_box {
  padding: 0 10px;
  .list_game_box {
    border-top: 2px solid #f5f5f5;
    border-radius: 8px;
    margin-top:10px;
    .van-cell {
      padding: 10px 10px;
      border-radius: 8px;
    }
    .top {
      img {
        width: 24px;
        height: 24px;
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
        font-size: 18px;
        font-weight: bold;
        color: #ff0000;
      }
      .tit_four {
        font-size: 10px;
        color: #ff0000;
      }
    }
    .mid {
      margin-top: 10px;
      font-size: 14px;
      .font_row {
        padding:10px 10px 0;
        background: #f2f2f2;
        .font_two {
          color: #bfbfbf;
        }
        .font_three {
          padding-top: 5px;
          color: #323232;
          font-weight: bold;
        }
      }
      .font_row:last-child{
        padding-bottom: 10px;
      }
    }
    .fot {
      padding-top: 10px;
      .red_color{
        color: #ff0000;
      }
      .time{
        vertical-align: middle;
        margin-right: 6px;
      }
    }
  }
}
</style>