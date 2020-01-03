<template>
  <!-- 推荐 -->
  <div class="recommend_box">
    <van-row type="flex" align="center">
      <van-col span="6" class="item tc">
        <router-link :to="{path: '/recommend', query:{}}">
          <img src="@/assets/home/logo.png" alt />
          <div>今日推荐</div>
        </router-link>
      </van-col>
      <van-col span="6" class="item tc">
        <router-link :to="{path: '/optimization', query:{}}">
          <img src="@/assets/home/logo.png" alt />
          <div>2.0优选</div>
        </router-link>
      </van-col>
      <van-col span="6" class="item tc">
        <router-link :to="{path: '/free', query:{}}">
          <img src="@/assets/home/logo.png" alt />
          <div>免费专区</div>
        </router-link>
      </van-col>
      <van-col span="6" class="item tc">
        <router-link :to="{path: '/focusGame', query:{}}">
          <img src="@/assets/home/logo.png" alt />
          <div>彩友工具</div>
        </router-link>
      </van-col>
    </van-row>
  </div>
</template>
<script>
export default {
  name: "",
  components: {},

  data() {
    return {};
  },

  methods: {}
};
</script>
<style lang="less" scoped>
.recommend_box {
  padding: 10px 0;
  background: #ffffff;
  font-size: 14px;
  .item {
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
}
</style>