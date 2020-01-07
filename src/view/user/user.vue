<template>
  <div>
    <!-- <Header></Header> -->
    <div class="main_box">
      <div class="user_box">
        <div class="top_box">
          <div class="list_game_box">
            <van-cell>
              <van-row class="top" type="flex" align="center">
                <van-col>
                  <router-link :to="{path:'/switch_store',query:{}}">
                    <img src="@/assets/home/game.png" alt />
                  </router-link>
                </van-col>
                <van-col span="24">
                  <div>
                    <span class="tit_one">超级大神</span>
                  </div>

                  <div>
                    <span v-if="false" class="tit_one">15007142244</span>
                    <span v-else class="tit_two">手机号未绑定</span>
                  </div>
                </van-col>
              </van-row>
            </van-cell>
          </div>
          <div class="right_bg">
            <img src="@/assets/home/game.png" alt />
            <span>认证专家</span>
          </div>
        </div>
        <div class="list_box">
          <router-link :to="{path:'/order',query:{}}">
            <van-cell title="我的订单" is-link center value icon="volume-o" value-class="val_cla" />
          </router-link>
          <router-link :to="{path:'/residue',query:{}}">
            <van-cell
              title="我的余额"
              is-link
              center
              value="100.52"
              icon="volume-o"
              value-class="val_cla"
            />
          </router-link>
          <router-link :to="{path:'/focus',query:{}}">
            <van-cell title="我的关注" is-link center value icon="volume-o" value-class="val_cla" />
          </router-link>
        </div>
        <div class="fot_box">
          <div v-if="true">
            <router-link :to="{path:'/bind_tel',query:{}}">
              <van-cell title="绑定店铺" is-link center value="大楚彩店" icon="volume-o" value-class />
            </router-link>
            <div class="btn">
              <router-link :to="{path:'/recruit',query:{}}">
                <van-button type="primary" color="#FF6600" size="large">大神招募中...</van-button>
              </router-link>
            </div>
          </div>
          <div v-else>
            <div class="exp">专家功能</div>
            <van-row class="cont" type="flex" align="center">
              <van-col class="item tc" span="6">
                <img src="@/assets/home/game.png" alt />
                <div>发布推荐</div>
              </van-col>
              <van-col class="item tc" span="6">
                <img src="@/assets/home/game.png" alt />
                <div>我的主页</div>
              </van-col>
              <van-col class="item tc" span="6">
                <img src="@/assets/home/game.png" alt />
                <div>我的收藏</div>
              </van-col>
            </van-row>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  name: "user",
  components: {},

  data() {
    return {};
  },

  methods: {}
};
</script>

<style lang="less" scope>
.user_box {
  .top_box {
    position: relative;
    background-image: url("../../assets/common/bg.png");
  }
  .list_game_box {
    padding: 10px;
    .van-cell {
      background-color: transparent;
    }
    .top {
      color: #fff;
      img {
        width: 52px;
        height: 52px;
        border-radius: 50%;
        vertical-align: middle;
      }
      .tit_one {
        font-size: 14px;
        margin-left: 8px;
      }
      .tit_two {
        font-size: 14px;
        margin-left: 8px;
        color: #e4e4e4;
      }
    }
  }
  .right_bg {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 3px 10px;
    border-radius: 30px;
    background: #ff0000;
    color: #fff;
    font-size: 12px;
    img {
      width: 15px;
      height: 15px;
      vertical-align: middle;
    }
  }
  .list_box {
    .val_cla {
      font-size: 12px;
      color: #ff9900;
    }
    .van-cell {
      border-bottom: 1px solid #f5f5f5;
    }
  }
  .fot_box {
    margin-top: 10px;
    box-sizing: border-box;
    .btn {
      border-radius: 10px;
      margin: 10px 10px 0 10px;
    }
    .exp {
      font-weight: bold;
      font-size: 16px;
      margin: 10px 10px 0 10px;
      border-left: 3px solid #000;
      padding-left: 10px;
    }
    .cont {
      padding: 10px;
      .item {
        font-size: 12px;
        img {
          width: 70px;
          height: 70px;
        }
      }
    }
  }
}
</style>
