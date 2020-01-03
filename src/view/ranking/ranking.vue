<template>
  <div>
    <!-- <Header></Header> -->
    <div class="main_box">
      <div class="tab_box">
        <van-tabs v-model="active" swipeable @change="onTabChange">
          <van-tab v-for="(item,index) in tabList" :key="index" :index="index">
            <div slot="title">
              <span>{{item}}</span>
            </div>
            <div class="latey">
              <span :class="{'checked':true}">近3天</span>
              <span>近7天</span>
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
                      <van-col span="2" class="tc">
                        <div>1</div>
                      </van-col>
                      <van-col span="">
                        <img src="@/assets/home/game.png" alt />
                      </van-col>
                      <van-col span="14">
                        <span class="tit_one">超级大神</span>
                      </van-col>
                      <van-col span="4" class="tr">
                        <div class="tit_three">100%</div>
                      </van-col>
                    </van-row>
                  </van-cell>
                </router-link>
              </div>
              <div class="list_game_box">
                <router-link :to="{path:'/recommend_detail',query:{}}">
                  <van-cell>
                    <van-row class="top" type="flex" align="center">
                      <van-col span="2" class="tc">
                        <div>1</div>
                      </van-col>
                      <van-col span="">
                        <img src="@/assets/home/game.png" alt />
                      </van-col>
                      <van-col span="14">
                        <span class="tit_one">超级大神</span>
                      </van-col>
                      <van-col span="4" class="tr">
                        <div class="tit_three">100%</div>
                      </van-col>
                    </van-row>
                  </van-cell>
                </router-link>
              </div>
              <div class="list_game_box">
                <router-link :to="{path:'/recommend_detail',query:{}}">
                  <van-cell>
                    <van-row class="top" type="flex" align="center">
                      <van-col span="2" class="tc">
                        <div>1</div>
                      </van-col>
                      <van-col span="">
                        <img src="@/assets/home/game.png" alt />
                      </van-col>
                      <van-col span="14">
                        <span class="tit_one">超级大神</span>
                      </van-col>
                      <van-col span="4" class="tr">
                        <div class="tit_three">100%</div>
                      </van-col>
                    </van-row>
                  </van-cell>
                </router-link>
              </div>
            </van-list>
          </van-tab>
        </van-tabs>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ranking",
  data() {
    return {
      active: 0,
      tabList: ["最高命中", "最高回报", "最高连红"],
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
.latey {
  text-align: center;
  padding: 10px 0 20px;
  background: #fff;
  span {
    box-sizing: border-box;
    font-size: 14px;
    padding: 8px 30px;
    border: 1px solid #f5f5f5;
  }
  span:first-child {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
  span:last-child {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  .checked {
    background: #ff9900;
    color: #fff;
  }
}
.list_game_box {
  border-top: 2px solid #f5f5f5;
  .top {
    font-size: 14px;
    img {
      width: 28px;
      height: 28px;
      border-radius: 50%;
    }
    .tit_one {
      font-size: 14px;
      margin-left: 10px;
    }
    .tit_three {
      font-size: 14px;
      font-weight: bold;
      color: #ff0000;
    }
    
  }
}
</style>