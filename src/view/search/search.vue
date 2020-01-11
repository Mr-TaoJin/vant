<template>
  <div>
    <!-- <Header></Header> -->
    <div class="main_box">
      <div class="search_box">
        <van-search v-model="value" placeholder="请输入搜索关键词" show-action shape="round">
          <div slot="action" @click="onSearch">
            <div class="btn">搜索</div>
          </div>
        </van-search>
      </div>
      <!-- 列表 有数据-->
      <van-list
        v-if="false"
        v-model="loading"
        :offset="0"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <div class="list_game_box">
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
          </van-cell>
        </div>
        <div class="list_game_box">
          <van-cell>
            <van-row class="top" type="flex" align="center">
              <van-col span="20">
                <img src="@/assets/home/game.png" alt />
                <span class="tit_one">超级大神</span>
                <span class="tit_two">近10中8</span>
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
          </van-cell>
        </div>
      </van-list>
      <!-- 列表 无数据-->
      <div v-else-if="true" class="no_data">
        <img src="@/assets/common/no_data.png" alt />
        <div>没有内容</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "search",
  data() {
    return {
      value: "",
      list: [],
      loading: false,
      finished: false
    };
  },
  methods: {
    onSearch(){},
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
.search_box {
  .btn {
    padding: 3px 20px;
    border-radius: 5px;
    background: #ff9900;
    color: #ffffff;
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
      font-weight: bold;
      color: #ff0000;
    }
    .van-icon {
      vertical-align: middle;
      margin-right: 6px;
    }
  }
}
.no_data {
  position: absolute;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  text-align: center;
  font-size: 14px;
  color: #e4e4e4;
}
</style>