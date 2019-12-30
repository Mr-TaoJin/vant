<template>
  <!-- 图片轮播 -->
  <div class="img_box">
    <van-swipe :autoplay="3000" @change="onChange" :initial-swipe="initialSwipe">
      <van-swipe-item
        class="b_item"
        :key="item.key"
        :index="index"
        v-for="(item,index) in banner_list"
      >
        <router-link :to="{path: '/share', query:{}}">
          <img src="@/assets/home/banner.png" alt />
        </router-link>
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
      initialSwipe: 0, //初始位置索引
      banner_list: [1, 2, 3]
    };
  },

  methods: {
    onChange(index) {
      // console.log(index);
    },
    more() {}
  }
};
</script>
<style lang="less" scoped>
.img_box {
  box-sizing: border-box;
  margin: 10px 10px;
  img {
    width: 100%;
  }
}
</style>