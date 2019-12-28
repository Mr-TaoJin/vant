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
      if (
        this.$route.path == "/bind_mobile" &&
        this.$store.state.user.user_auth.is_login == 1 &&
        this.type
      ) {
        this.$router.replace({ path: "/home" });
        return;
      }
      this.$router.back();
    },
    onClickRight() {
      this.$router.push({ path: "/home", query: {} });
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
