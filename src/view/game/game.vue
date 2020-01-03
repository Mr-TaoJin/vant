<template>
  <div>
    <!-- <Header></Header> -->
    <div class="main_box">
      <div class="filter_box">
        <van-row type="flex" align="center">
          <van-col span="18">
            <input type="text" :value="date" />
          </van-col>
          <van-col span="6" class="tr">
            <van-button
              icon="filter-o"
              size="small"
              color="linear-gradient(to right, #4bb0ff, #6149f6)"
              @click="show = true"
            >筛选</van-button>
          </van-col>
        </van-row>
      </div>
      <div class="list_box">
        <van-cell>
          <van-row class="r_it1" type="flex" align="center">
            <van-col span="12">西甲 周四001</van-col>
            <van-col span="12" class="tr">12-22 03:00</van-col>
          </van-row>
          <van-row class="r_it2 tc" type="flex" align="center">
            <van-col span="8">
              <img src="@/assets/home/game.png" alt />
              <div>巴萨</div>
            </van-col>
            <van-col span="8">
              <div class="vs">2:1</div>
              <div class="end">已结束</div>
              <div class="rec">23个推荐</div>
            </van-col>
            <van-col span="8">
              <img src="@/assets/home/game.png" alt />
              <div>皇马</div>
            </van-col>
          </van-row>
        </van-cell>
      </div>
      <div class="list_box">
        <van-cell>
          <van-row class="r_it1" type="flex" align="center">
            <van-col span="12">西甲 周四001</van-col>
            <van-col span="12" class="tr">12-22 03:00</van-col>
          </van-row>
          <van-row class="r_it2 tc" type="flex" align="center">
            <van-col span="8">
              <img src="@/assets/home/game.png" alt />
              <div>巴萨</div>
            </van-col>
            <van-col span="8">
              <div class="vs">VS</div>
              <div class="end">已结束</div>
              <div class="rec">23个推荐</div>
            </van-col>
            <van-col span="8">
              <img src="@/assets/home/game.png" alt />
              <div>皇马</div>
            </van-col>
          </van-row>
        </van-cell>
      </div>
    </div>
    <Footer></Footer>
    <van-calendar v-model="show" @confirm="onConfirm" />
  </div>
</template>

<script>
export default {
  name: "game",
  components: {},

  data() {
    return {
      show: false,
      date: ""
    };
  },

  methods: {
    formatDate() {
      return `${date.getMonth() + 1}/${date.getDate()}`;
    },
    onConfirm(date) {
      const [start, end] = date;
      this.show = false;
      this.date = `${this.formatDate(start)} - ${this.formatDate(end)}`;
    }
  }
};
</script>

<style lang="less" scope>
.filter_box {
  font-size: 14px;
  padding: 10px;
  background: #ffffff;
  input {
    border-radius: 6px;
    padding: 5px;
    border: 1px solid #bfbfbf;
    text-align: center;
    width: 100%;
  }
}
.list_box {
  margin: 10px;
  border-radius: 8px;
  .r_it1 {
    font-size: 12px;
    color: #bfbfbf;
  }
  img {
    width: 38px;
    height: 38px;
  }
  .r_it2 {
    padding: 10px 0 0;
    font-weight: bold;
  }
  .vs {
    font-size: 20px;
  }
  .end{
     color: #bfbfbf;
     padding: 3px;
  }
  .rec{
    border-radius: 5px;
    border:1px solid #ff0000;
    color:#ff0000;
  }
}
</style>
