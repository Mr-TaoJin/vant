<template>
  <!-- 顶部滑动轮播 -->
  <div class="top_box">
    <van-row type="flex"
             align="center">
      <van-col span="5"
               class="logo">
        <img src="@/assets/home/logo.png"
             alt="">
      </van-col>
      <van-col span="8"
               class="title">
        <div>大楚彩店</div>
        <img src="@/assets/home/wx.png"
             alt="">
        <img src="@/assets/home/tel.png"
             alt="">
        <img src="@/assets/home/share.png"
             alt="">
      </van-col>
      <van-col span="11"
               class="tr btn">
        <router-link :to="{path:'/search',query:{}}">
          <span>输入名称搜索</span>
        </router-link>
      </van-col>
    </van-row>
    <van-swipe class="handle_banner"
               @change="onChange"
               :loop="false"
               :width="330"
               :initial-swipe="initialSwipe"
               :show-indicators="false">
      <van-swipe-item class="b_item"
                      :key="item.key"
                      :index="index"
                      v-for="(item,index) in top_banner_list">
        <div class="item">
          <van-row type="flex" align="center">
            <van-col span="4">
              <div class="t_txt tc">最高命中榜</div>
            </van-col>
            <van-col span="20"
                     class="re_box">
              <van-row type="flex"
                       class='re_item'
                       align="center">
                <van-col span="2">1</van-col>
                <van-col span="4"><img src="@/assets/home/game.png"
                       alt=""></van-col>
                <van-col span="12">超级大神</van-col>
                <van-col span="5"
                         class="tr">100%</van-col>
              </van-row>
              <van-row type="flex"
                       class='re_item'
                       align="center">
                <van-col span="2">2</van-col>
                <van-col span="4"><img src="@/assets/home/game.png"
                       alt=""></van-col>
                <van-col span="12">超级大神</van-col>
                <van-col span="5"
                         class="tr">100%</van-col>
              </van-row>
              <van-row type="flex"
                       class='re_item'
                       align="center">
                <van-col span="2">3</van-col>
                <van-col span="4"><img src="@/assets/home/game.png"
                       alt=""></van-col>
                <van-col span="12">超级大神</van-col>
                <van-col span="5"
                         class="tr">100%</van-col>
              </van-row>
              <van-row type="flex"
                       class='re_item'
                       align="center">
                <van-col span="2">4</van-col>
                <van-col span="4"><img src="@/assets/home/game.png"
                       alt=""></van-col>
                <van-col span="12">超级大神</van-col>
                <van-col span="5"
                         class="tr">100%</van-col>
              </van-row>
              <van-row type="flex"
                       align="center">
                <van-col span="2">5</van-col>
                <van-col span="4"><img src="@/assets/home/game.png"
                       alt=""></van-col>
                <van-col span="12">超级大神</van-col>
                <van-col span="5"
                         class="tr">100%</van-col>
              </van-row>
            </van-col>
          </van-row>
        </div>
        <div class="more"
             v-show="index == top_banner_list.length-1"
             @click="more">
          <img src="@/assets/home/wx.png"
               alt="">
          <div class="mo_t">查看更多</div>
        </div>
      </van-swipe-item>

    </van-swipe>
  </div>

</template>
<script>
export default {
  name: "",
  components: {},

  data() {
    return {
      initialSwipe:0,//初始位置索引
      top_banner_list:[1,2,3,4]
    };
  },

  methods: {
    onChange(index) {
      console.log(index);
    },
    more(){
      
    }
  }
};
</script>
<style lang="less" scoped>
.top_box {
  background: #0c00ae;
  padding: 20px;
  font-size: 12px;

  .logo {
    img {
      border-radius: 50%;
    }
  }
  .title {
    color: #fff;
    font-size: 20px;
    img {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      margin-right: 10px;
    }
  }
  .btn {
    color: #fff;
    span {
      font-size: 12px;
      border: 1px solid #ffffff;
      padding: 6px 15px;
      border-radius: 30px;
    }
  }
  .handle_banner {
    padding-top: 10px;
    .b_item {
      position: relative;
      box-sizing: border-box;
      padding: 0;
      .item {
        width: 262px;
        background: #ff0000;
        border-radius: 6px;
        .t_txt {
          box-sizing: border-box;
          padding: 34px 8px;
          font-size: 14px;
          border-top-left-radius: 6px;
          border-bottom-left-radius: 6px;
        }
        .re_box {
          background: #ffffff;
          padding: 6px;
          .re_item {
            padding: 3px 0;
          }
        }
      }
      .more {
        position: absolute;
        transform: translateY(-50%);
        top: 50%;
        right: 0;
        width: 25px;
        .mo_t {
          font-size: 14px;
          color: #ffffff;
          padding: 5px;
        }
        img {
          width: 25px;
          height: 25px;
          border-radius: 50%;
        }
      }
    }
  }
}
</style>