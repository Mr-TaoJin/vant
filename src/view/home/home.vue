<template>
  <div>
    <!-- <Header></Header> -->
    <div class="main_box">
      <!-- 顶部滑动轮播 -->
      <top-banner></top-banner>
      <!-- 推荐专区 -->
      <recommend></recommend>
      <!-- 图片轮播 -->
      <img-banner></img-banner>
      <!-- 赛事焦点 -->
      <game-focus></game-focus>
      <!-- 赛事列表 -->
      <game-list></game-list>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import TopBanner from "./modules/TopBanner";
import Recommend from "./modules/Recommend";
import ImgBanner from "./modules/ImgBanner";
import GameFocus from "./modules/GameFocus";
import GameList from "./modules/GameList";

import { testGet, testPost } from "@/api/api";
export default {
  name: "home",
  components: { TopBanner, Recommend, ImgBanner, GameFocus, GameList },

  data() {
    return {};
  },

  methods: {
    // 请求示例
    requestGetCase() {
      let params = {
        a: "1111",
        b: "2222"
      };
      testGet(params).then(res => {
        console.log(res);
      }).catch(err=>{
        console.log(err);
      });
    },
    requestPostCase() {
      let params = {
        c: "3333",
        d: "44444"
      };
      testPost(params).then(res => {
        console.log(res);
      }).catch(err=>{
        console.log(err);
      });
    }
  },
  mounted() {
    this.requestGetCase();
    this.requestPostCase();
  }
};
</script>

<style lang="less" scoped>
</style>
