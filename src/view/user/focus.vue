<template>
  <div>
    <!-- <Header></Header> -->
    <div class="main_box">
      <div class="tab_box">
        <van-tabs v-model="active"
                  swipeable
                  @change="onTabChange">
          <van-tab v-for="(item,index) in tabList"
                   :key="index"
                   :index="index">
            <div slot="title">
              <span>{{item}}</span>
            </div>
            <!-- 列表 -->
            <van-list v-model="loading"
                      :offset="0"
                      :finished="finished"
                      finished-text="没有更多了"
                      @load="onLoad">
              <div v-if="active == 0">
                <div class="list_box">
                  <router-link :to="{path:'/recommend_detail',query:{}}">
                    <van-cell>
                      <van-row class="top"
                               type="flex"
                               align="center">
                        <van-col span="3">
                          <img src="@/assets/home/game.png"
                               alt />

                        </van-col>
                        <van-col span="9">
                          <span class="tit_one">超级大神</span>
                        </van-col>
                        <van-col span="12"
                                 class="tr">
                          <span class="tit_two">已关注</span>
                        </van-col>
                      </van-row>

                    </van-cell>
                  </router-link>
                </div>
                <div class="list_box">
                  <router-link :to="{path:'/recommend_detail',query:{}}">
                    <van-cell>
                      <van-row class="top"
                               type="flex"
                               align="center">
                        <van-col span="3">
                          <img src="@/assets/home/game.png"
                               alt />

                        </van-col>
                        <van-col span="9">
                          <span class="tit_one">超级大神</span>
                        </van-col>
                        <van-col span="12"
                                 class="tr">
                          <span class="tit_two">已关注</span>
                        </van-col>
                      </van-row>
                    </van-cell>
                  </router-link>
                </div>
              </div>
              <div v-else-if="active == 1">
                <div class="list_box">
                  <router-link :to="{path:'/recommend_detail',query:{}}">
                    <van-cell>
                      <van-row class="top"
                               type="flex"
                               align="center">
                        <van-col span="3">
                          <img src="@/assets/home/game.png"
                               alt />

                        </van-col>
                        <van-col span="9">
                          <span class="tit_one">龙眼1号</span>
                        </van-col>
                        <van-col span="12"
                                 class="tr">
                          <span class="tit_two">已关注</span>
                        </van-col>
                      </van-row>
                    </van-cell>
                  </router-link>
                </div>
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
  name: "focus",
  data() {
    return {
      active: 0,
      tabList: ["关注的大神", "关注的优选"],
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
  .list_box {
    border-top: 2px solid #f5f5f5;
    .top {
      img {
        width: 28px;
        height: 28px;
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
    }
  }
}
</style>