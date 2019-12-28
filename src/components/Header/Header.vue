<template>
  <div>
    <van-nav-bar fixed
                 :title="title"
                 :left-text="isleftarrow?'返回':''"
                 :right-text="isrightarrow?'首页':''"
                 :left-arrow="isleftarrow"
                 @click-left="onClickLeft"
                 @click-right="onClickRight" />
  </div>
</template>

<script>
export default {
  components: {},

  data() {
    return {
      title: "",
      isleftarrow: false,
      isrightarrow: false
    };
  },

  methods: {
    onClickLeft() {
      this.$toast("返回");
    },
    onClickRight() {
      this.$toast("首页");
    }
  },
  mounted() {
    this.title = this.$route.meta.title;
    this.isleftarrow = this.$route.meta.isleftarrow;
    this.isrightarrow = this.$route.meta.isrightarrow;
  }
};
</script>

<style lang="less" scope>
</style>
