<template>
  <div>
    <Header></Header>
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
export default {
  name: "home",
  components: { TopBanner, Recommend, ImgBanner, GameFocus, GameList },

  data() {
    return {};
  },

  methods: {}
};
</script>

<style lang="less" scoped>
</style>
