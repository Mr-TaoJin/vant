<template>
  <div>
    <!-- <Header></Header> -->
    <div class="main_box">
      <div class="tab_box">

        <!-- 列表 -->
        <van-list v-model="loading"
                  :offset="0"
                  :finished="finished"
                  finished-text="没有更多了"
                  @load="onLoad">
          <div class="list_game_box">
            <router-link :to="{path:'/order_detail',query:{}}">
              <van-cell>
                <van-row class="top"
                         type="flex"
                         align="center">
                  <van-col span="20">
                    <img src="@/assets/home/game.png"
                         alt />
                    <span class="tit_one">超级大神</span>
                    <span class="tit_two">近10中8</span>
                    <span class="tit_two">3连红</span>
                  </van-col>
                  <van-col span="4"
                           class="tr">
                    <div class="tit_three">100%</div>
                    <div class="tit_four">命中率</div>
                  </van-col>
                </van-row>
                <van-row class="mid"
                         type="flex"
                         align="center">
                  <van-col span="24">
                    <span class="tit_one">西甲</span>
                    <span class="tit_two">武汉高衙内今日澳超法乙2X1推荐推荐</span>
                  </van-col>
                </van-row>
                <van-row class="fot"
                         type="flex"
                         align="center">
                  <van-col span="12">
                    <span>
                      <van-icon class="ioc"
                                name="underway-o" />
                      <span>12-12 12:00</span>
                    </span>
                  </van-col>
                  <van-col span="12"
                           class="tr">
                    <span>68.00</span>
                  </van-col>
                </van-row>
              </van-cell>
            </router-link>
          </div>
          <div class="list_game_box">
            <router-link :to="{path:'/recommend_detail',query:{}}">
              <van-cell>
                <van-row class="top"
                         type="flex"
                         align="center">
                  <van-col span="20">
                    <img src="@/assets/home/game.png"
                         alt />
                    <span class="tit_one">超级大神</span>
                    <span class="tit_two">近10中8</span>
                    <span class="tit_two">3连红</span>
                  </van-col>
                  <van-col span="4"
                           class="tr">
                    <div class="tit_three">100%</div>
                    <div class="tit_four">命中率</div>
                  </van-col>
                </van-row>
                <van-row class="mid"
                         type="flex"
                         align="center">
                  <van-col span="24">
                    <span class="tit_one">西甲</span>
                    <span class="tit_two">武汉高衙内今日澳超法乙2X1推荐推荐</span>
                  </van-col>
                </van-row>
                <van-row class="fot"
                         type="flex"
                         align="center">
                  <van-col span="12">
                    <span>
                      <van-icon class="ioc"
                                name="underway-o" />
                      <span>12-12 12:00</span>
                    </span>
                  </van-col>
                  <van-col span="12"
                           class="tr">
                    <span>68.00</span>
                  </van-col>
                </van-row>
              </van-cell>
            </router-link>
          </div>
        </van-list>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "order",
  data() {
    return {
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
    }
  }
};
</script>
<style lang="less" scoped>
.tab_box {
  padding-top: 10px;
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
    .van-icon {
      vertical-align: middle;
      font-size: 16px;
      margin-right: 6px;
    }
  }
}
</style>