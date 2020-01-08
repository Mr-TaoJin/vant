<template>
  <van-overlay :show="show" @click="close">
    <div class="wrapper">
      <div class="block" />
    </div>
  </van-overlay>
</template>
<script>
export default {
  name: "",
  components: {},

  data() {
    return {
      show: false
    };
  },

  methods: {
    close() {
        console.log('11111');
      this.show = false;
    }
  }
};
</script>
<style lang="less" scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.block {
  width: 120px;
  height: 120px;
  background-color: #fff;
}
</style>