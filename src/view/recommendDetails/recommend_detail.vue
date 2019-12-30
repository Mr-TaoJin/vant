<template>
  <div>
    <Header></Header>
    <div class="main_box">
      <div class="recommend_detail_box">
        <div class="top_box">
          <div class="up">
            <div class="tit">冲击8连红！今日一场英冠单关推荐，布莱克VS本订</div>
            <van-row class="" type="flex" align="center">
              <van-col span="12">
                <span class="tit_one">14:55发布</span>
              </van-col>
              <van-col span="12" class="tr">
                <span class="tit_two">
                  <van-icon class="eye" name="eye-o" />
                  <span>183人查看</span>
                </span>
              </van-col>
            </van-row>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "recommend_detail",
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="less" scoped>
.recommend_detail_box {
  .top_box {
    background: #ffffff;
    .up {
      border-bottom:1px solid #bfbfbf;
      padding: 10px;
      .tit {
        font-size: 18px;
        font-weight: bold;
      }
      .tit_one,
      .tit_two{
        color:#bfbfbf;
        .eye{
          font-size: 14px;
          vertical-align: middle;
          margin-right: 6px;
        }
        font-size: 12px;
      }
    }
  }
}
</style>