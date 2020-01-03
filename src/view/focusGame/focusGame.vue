<template>
  <div>
    <!-- <Header></Header> -->
    <div class="main_box">
      <div class="tab_box">
        <!-- 标题 -->
        <div class="title_box">焦点赛事</div>
        <!-- 轮播 -->
        <div class="banner_box">
          <van-swipe :autoplay="3000" @change="onChange" :initial-swipe="initialSwipe">
            <van-swipe-item
              class="b_item"
              :key="item.key"
              :index="index"
              v-for="(item,index) in banner_list"
            >
              <van-cell class="banner_item">
                <van-row class="r_it1" type="flex" align="center">
                  <van-col span="12">西甲 周四001</van-col>
                  <van-col span="12" class="tr">12-22 03:00</van-col>
                </van-row>
                <van-row class="r_it2 tc" type="flex" align="center">
                  <van-col span="8">
                    <img src="@/assets/home/game.png" alt />
                    <div>巴萨</div>
                  </van-col>
                  <van-col span="8" class="vs">VS</van-col>
                  <van-col span="8">
                    <img src="@/assets/home/game.png" alt />
                    <div>皇马</div>
                  </van-col>
                </van-row>
              </van-cell>
            </van-swipe-item>
            <div class="custom_indicator" slot="indicator">
              <span
                :class="{'current':current==index}"
                :key="item.key"
                :index="index"
                v-for="(item,index) in banner_list"
              ></span>
            </div>
          </van-swipe>
        </div>
        <!-- 列表 -->
         <van-row class="list_box" type="flex" align="center">
          <van-col span="12" class="fot_s">本场大神推荐</van-col>
          <van-col span="12" class="tr">共26个推荐</van-col>
        </van-row>
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
                    <span class="tit_four">38.00</span>
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
  name: "focusGame",
  data() {
    return {
      initialSwipe: 0, //初始位置索引
      banner_list: [1, 1, 1, 1],
      current: 0,
      list: [],
      loading: false,
      finished: false
    };
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
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
.title_box {
  font-size: 18px;
  color: #000;
  font-weight: bold;
  padding: 10px 10px;
  background: #ffcc00;
}
.banner_box {
  box-sizing: border-box;
  padding: 0 10px 10px;
  background: #ffcc00;
  .custom_indicator {
    text-align: center;
    span {
      display: inline-block;
      width: 14px;
      height: 6px;
      border-radius: 10px;
      background: #fff;
      margin-left: 10px;
    }
    .current {
      background: #ccc;
    }
  }
  .banner_item {
    border-radius: 8px;
    .r_it1 {
      font-size: 12px;
      color: #323232;
    }
    img {
      width: 38px;
      height: 38px;
    }
    .vs {
      font-size: 26px;
    }
    .r_it2 {
      padding: 10px 0 0;
      font-weight: bold;
    }
  }
}
.list_box{
  background: #fff;
  padding:10px;
  font-size: 12px;
  color:#bfbfbf;
  .fot_s{
    color:#000;
    font-size: 14px;
    font-weight: bold;
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
      background: #ff9900;
      padding: 2px 10px;
      border-radius: 30px;
      margin-right: 10px;
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