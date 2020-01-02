<template>
  <div class="tab_box">
    <van-tabs v-model="active" swipeable @change="onTabChange">
      <van-tab v-for="(item,index) in tabList" :key="index" :index="index">
        <div slot="title">
          <span :class="{'tab_cl':active==index}">{{item}}</span>
        </div>
        <!-- 列表 -->
        <van-list
          v-model="loading"
          :offset="0"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <div class="list_game_box">
            <router-link :to="{path:'/recommend_detail',query:{}}">
              <van-cell>
                <van-row class="top" type="flex" align="center">
                  <van-col span="20">
                    <img src="@/assets/home/game.png" alt />
                    <span class="tit_one">超级大神</span>
                    <span class="tit_two">近10中8</span>
                    <span class="tit_two">3连红</span>
                  </van-col>
                  <van-col span="4" class="tr">
                    <div class="tit_three">100%</div>
                    <div class="tit_four">命中率</div>
                  </van-col>
                </van-row>
                <van-row class="mid" type="flex" align="center">
                  <van-col span="24">
                    <span class="tit_one">西甲</span>
                    <span class="tit_two">武汉高衙内今日澳超法乙2X1推荐推荐</span>
                  </van-col>
                </van-row>
                <van-row class="fot" type="flex" align="center">
                  <van-col span="12">
                    <span class="tit_one">
                      <van-icon name="eye-o" />
                      <span>12</span>
                    </span>
                    <span class="tit_two">
                      <van-icon name="underway-o" />
                      <span>16:02</span>
                    </span>
                  </van-col>
                  <van-col span="12" class="tr">
                    <span class="tit_three">不中退款</span>
                    <span class="tit_four">免费</span>
                  </van-col>
                </van-row>
              </van-cell>
            </router-link>
          </div>
          <div class="list_game_box">
            <router-link :to="{path:'/recommend_detail',query:{}}">
              <van-cell>
                <van-row class="top" type="flex" align="center">
                  <van-col span="20">
                    <img src="@/assets/home/game.png" alt />
                    <span class="tit_one">超级大神</span>
                    <span class="tit_two">近10中8</span>
                    <span class="tit_two">3连红</span>
                  </van-col>
                  <van-col span="4" class="tr">
                    <div class="tit_three">100%</div>
                    <div class="tit_four">命中率</div>
                  </van-col>
                </van-row>
                <van-row class="mid" type="flex" align="center">
                  <van-col span="24">
                    <span class="tit_one">西甲</span>
                    <span class="tit_two">武汉高衙内今日澳超法乙2X1推荐推荐</span>
                  </van-col>
                </van-row>
                <van-row class="fot" type="flex" align="center">
                  <van-col span="12">
                    <span class="tit_one">
                      <van-icon name="eye-o" />
                      <span>12</span>
                    </span>
                    <span class="tit_two">
                      <van-icon name="underway-o" />
                      <span>16:02</span>
                    </span>
                  </van-col>
                  <van-col span="12" class="tr">
                    <span class="tit_three">不中退款</span>
                    <span class="tit_four">免费</span>
                  </van-col>
                </van-row>
              </van-cell>
            </router-link>
          </div>
        </van-list>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
export default {
  name: "GameList",
  data() {
    return {
      active: 0,
      tabList: ["关注", "推荐", "二串", "总进球", "半全场", "单关", "篮球"],
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
  margin: 10px 0;
  .tab_cl {
    border-radius: 30px;
    padding: 2px 8px;
    background: #ff0000;
    color: #fff;
  }
}
.list_game_box {
  border-top: 2px solid #f5f5f5;
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
      padding: 1px 5px;
      border-radius: 30px;
    }
    .tit_three {
      font-size: 14px;
      font-weight: bold;
      color: #ff0000;
    }
    .tit_four {
      font-size: 10px;
      color: #ff0000;
    }
  }
  .mid {
    padding-bottom: 10px;
    .tit_one {
      font-size: 10px;
      background: #0066ff;
      color: #fff;
      padding: 1px 5px;
      border-radius: 30px;
    }
    .tit_two {
      font-size: 14px;
      margin-left: 8px;
    }
  }
  .fot {
    font-size: 14px;
    color: #999;
    .tit_one {
      margin-right: 10px;
    }
    .tit_three {
      font-size: 12px;
      color: #fff;
      background: #FF9900;
      padding:2px 10px;
      border-radius: 30px;
      margin-right:10px; 
    }
    .tit_four {
      font-weight: bold;
      color: #ff0000;
    }
    .van-icon {
      vertical-align: middle;
      margin-right: 6px;
    }
  }
}
</style>