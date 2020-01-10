<template>
  <van-overlay :show="show"
               @click="close">
    <div class="wrapper">
      <div class="block">
        <van-row class="top tc"
                 type="flex"
                 align="center">
          <van-col span="8"
                   class="tit1">墨尔本城</van-col>
          <van-col span="8">VS</van-col>
          <van-col span="8"
                   class="tit1">悉尼FC</van-col>
        </van-row>
        <div class="title">胜平负/让球</div>
        <van-row type="flex"
                 align="center">
          <van-col span="24"
                   class="tc">
            <table>
              <tr>
                <td>0</td>
                <td>
                  胜 2.01
                  <i class="sanjiao"></i>
                </td>
                <td>平 2.01</td>
                <td>负 2.01</td>
              </tr>
              <tr>
                <td class="green">+1</td>
                <td>胜 2.01</td>
                <td>平 2.01</td>
                <td>负 2.01</td>
              </tr>
            </table>
          </van-col>
        </van-row>
        
      </div>
    </div>
  </van-overlay>
</template>
<script>
export default {
  name: "",
  components: {},

  data() {
    return {
      show: true
    };
  },

  methods: {
    close() {
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
table {
  background: #fff;
  width: 100%;
  text-align: center; /*文本居中*/
  border-collapse: collapse; /*表格的边框合并，如果相邻，则共用一个边框*/
  border-spacing: 0; /*设置行与单元格边框的间距。当表格边框独立（即border-collapse:separate;）此属性才起作用*/
  tr {
    padding: 0;
    td {
      position: relative;
      padding: 0;
      font-size: 12px;
      border-bottom: 1px solid #000;
      border-right: 1px solid #000;
      padding: 8px 5px;
      .sanjiao {
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        height: 0;
        border-top: 15px solid red;
        border-right: 15px solid transparent;
        font-size: 10px;
      }
    }
    td.red{
      color:#ff0000;
    }
    td.green{
      color:green;
    }
    .width32 {
      width: 32px;
    }
  }
  tr:first-child td {
    border-top: 1px solid #000;
  }
  tr td:first-child {
    border-left: 1px solid #000;
  }
}

.block {
  width: 96%;
  background-color: #fff;
  font-size: 12px;
  padding: 10px;
  .title {
    padding: 10px 0px;
  }
  .top {
    padding: 10px 0px;
    border-bottom: 1px solid #bfbfbf;
    .tit1 {
      font-size: 14px;
      font-weight: bold;
    }
  }
}
</style>