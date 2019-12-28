<template>
  <div class="focus_box">
    <van-row class="title"
             type="flex"
             align="center">
      <van-col span="12">
        <span class="title_left">焦点赛事</span>
      </van-col>
      <van-col span="12"
               class="tr">

        <span class="title_right">
          <van-icon name="replay" />换一换</span>
      </van-col>
    </van-row>
    <van-row gutter="20"
             class="content">
      <van-col span="12">
        <div class="content_item">
          <van-row class="content_item_top">
            <van-col span="12">
              西甲 周四001
            </van-col>
            <van-col span="12">
              12-22 03:00
            </van-col>
          </van-row>
          <van-row type="flex"
                   align="center"
                   class="content_item_cont tc">
            <van-col span="8">
              <img src="@/assets/home/game.png"
                   alt="">
              <div class="fo_b">巴塞</div>
            </van-col>
            <van-col span="8" class="fo_a">
              VS
            </van-col>
            <van-col span="8">
              <img src="@/assets/home/game.png"
                   alt="">
              <div class="fo_b">皇马</div>
            </van-col>
          </van-row>
          <div class="tr">8位大神推荐</div>
        </div>
      </van-col>
      <van-col span="12">
        <div class="content_item">
          <van-row class="content_item_top">
            <van-col span="12">
              西甲 周四001
            </van-col>
            <van-col span="12">
              12-22 03:00
            </van-col>
          </van-row>
          <van-row type="flex"
                   align="center"
                   class="content_item_cont tc">
            <van-col span="8">
              <img src="@/assets/home/game.png"
                   alt="">
              <div class="fo_b">巴塞</div>
            </van-col>
            <van-col span="8" class="fo_a">
              VS
            </van-col>
            <van-col span="8">
              <img src="@/assets/home/game.png"
                   alt="">
              <div class="fo_b">皇马</div>
            </van-col>
          </van-row>
          <div class="tr">8位大神推荐</div>
        </div>
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
.focus_box {
  padding: 10px 10px;
  background: #ffffff;
  .title {
    padding-bottom: 10px;
    font-size: 14px;
    &_left {
      font-weight: bold;
      padding-left: 20px;
      border-left: 3px solid #000;
    }

    &_right {
      color: #0066ff;
      .van-icon {
        vertical-align: middle;
        margin-right: 6px;
      }
    }
  }
  .content {
    &_item {
      font-size: 12px;
      color: #fff;
      padding: 5px;
      border-radius: 5px;
      background: #ff9900;
      .content_item_cont {
        padding: 8px 0;
        img {
          width: 38px;
          height: 38px;
          border-radius: 50%;
        }
        .fo_a{
          font-size: 16px;
          font-weight: bold;
        }
        .fo_b{
          font-weight: bold;
        }
      }
    }
  }
}
</style>