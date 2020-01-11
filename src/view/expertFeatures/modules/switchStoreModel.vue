<template>
  <van-overlay :show="show"
               @click="close">
    <div class="wrapper">
      <div class="block" @click.stop>
        <van-row class="top tc"
                 type="flex"
                 align="center">
          <van-col span="8"
                   class="tit1">墨尔本城</van-col>
          <van-col span="8">VS</van-col>
          <van-col span="8"
                   class="tit1">悉尼FC</van-col>
        </van-row>
        <!-- 胜平负/让球 -->
        <div class="title">胜平负/让球</div>
        <table>
          <tr>
            <td class="width10">0</td>
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
        <!-- 单 -->
        <div class="title"><span class="dan">单</span><span>比分</span></div>
        <table class="table_type_1">
          <tr>
            <td rowspan="3"
                class="width10">胜</td>
            <td>
              <div>1:0</div>
              <div>6.75</div>
            </td>
            <td>
              <div>1:0</div>
              <div>6.75</div>
            </td>
            <td>
              <div>1:0</div>
              <div>6.75</div>
            </td>
            <td>
              <div>1:0</div>
              <div>6.75</div>
            </td>
            <td>
              <div>1:0</div>
              <div>6.75</div>
            </td>
          </tr>
          <tr>

            <td>
              <div>1:0</div>
              <div>6.75</div>
            </td>
            <td>
              <div>1:0</div>
              <div>6.75</div>
            </td>
            <td>
              <div>1:0</div>
              <div>6.75</div>
            </td>
            <td>
              <div>1:0</div>
              <div>6.75</div>
            </td>
            <td>
              <div>1:0</div>
              <div>6.75</div>
            </td>
          </tr>
          <tr>
            <td>
              <div>1:0</div>
              <div>6.75</div>
            </td>
            <td>
              <div>1:0</div>
              <div>6.75</div>
            </td>
            <td colspan="3">
              <div>胜其他</div>
              <div>37.00</div>
            </td>
          </tr>
          <tr>
            <td class="width10">平</td>
            <td>
              <div>1:0</div>
              <div>6.75</div>
            </td>
            <td>
              <div>1:0</div>
              <div>6.75</div>
            </td>
            <td>
              <div>1:0</div>
              <div>6.75</div>
            </td>
            <td>
              <div>1:0</div>
              <div>6.75</div>
            </td>
            <td>
              <div>平其他</div>
              <div>6.75</div>
            </td>
          </tr>
          <tr>
            <td rowspan="3"
                class="width10">负</td>
            <td>
              <div>1:0</div>
              <div>6.75</div>
            </td>
            <td>
              <div>1:0</div>
              <div>6.75</div>
            </td>
            <td>
              <div>1:0</div>
              <div>6.75</div>
            </td>
            <td>
              <div>1:0</div>
              <div>6.75</div>
            </td>
            <td>
              <div>1:0</div>
              <div>6.75</div>
            </td>
          </tr>
          <tr>
            <td>
              <div>1:0</div>
              <div>6.75</div>
            </td>
            <td>
              <div>1:0</div>
              <div>6.75</div>
            </td>
            <td>
              <div>1:0</div>
              <div>6.75</div>
            </td>
            <td>
              <div>1:0</div>
              <div>6.75</div>
            </td>
            <td>
              <div>1:0</div>
              <div>6.75</div>
            </td>
          </tr>
          <tr>
            <td>
              <div>1:0</div>
              <div>6.75</div>
            </td>
            <td>
              <div>1:0</div>
              <div>6.75</div>
            </td>
            <td colspan="3">
              <div>负其他</div>
              <div>37.00</div>
            </td>
          </tr>
        </table>
        <!-- 总进球 -->
        <div class="title"><span class="dan">单</span><span>总进球</span></div>
        <table class="table_type_1">
          <tr>
            <td rowspan="2"
                class="width10">总进球</td>
            <td>
              <div>1:0</div>
              <div>6.75</div>
            </td>
            <td>
              <div>1:0</div>
              <div>6.75</div>
            </td>
            <td>
              <div>1:0</div>
              <div>6.75</div>
            </td>
            <td>
              <div>1:0</div>
              <div>6.75</div>
            </td>
          </tr>
          <tr>
            <td>
              <div>1:0</div>
              <div>6.75</div>
            </td>
            <td>
              <div>1:0</div>
              <div>6.75</div>
            </td>
            <td>
              <div>1:0</div>
              <div>6.75</div>
            </td>
            <td>
              <div>1:0</div>
              <div>6.75</div>
            </td>
          </tr>
        </table>
        <!-- 半全场 -->
        <div class="title"><span class="dan">单</span><span>总进球</span></div>
        <table class="table_type_1">
          <tr>
            <td rowspan="3"
                class="width10">半全场</td>
            <td>
              <div>1:0</div>
              <div>6.75</div>
            </td>
            <td>
              <div>1:0</div>
              <div>6.75</div>
            </td>
            <td>
              <div>1:0</div>
              <div>6.75</div>
            </td>
          </tr>
          <tr>
            <td>
              <div>1:0</div>
              <div>6.75</div>
            </td>
            <td>
              <div>1:0</div>
              <div>6.75</div>
            </td>
            <td>
              <div>1:0</div>
              <div>6.75</div>
            </td>
          </tr>
          <tr>
            <td>
              <div>1:0</div>
              <div>6.75</div>
            </td>
            <td>
              <div>1:0</div>
              <div>6.75</div>
            </td>
            <td>
              <div>1:0</div>
              <div>6.75</div>
            </td>
          </tr>
        </table>
        <!-- 按钮 -->
        <van-row class="fot tc"
                 type="flex"
                 align="center">
          <van-col span="12">
            <div class="close" @click="close">取消</div>
          </van-col>
          <van-col span="12">
            <div class="ok">确定</div>
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
      show: false
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
    .width10 {
      width: 10px;
    }
    td {
      position: relative;
      padding: 0;
      font-size: 10px;
      border-bottom: 1px solid #bfbfbf;
      border-right: 1px solid #bfbfbf;
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
    td.red {
      color: #ff0000;
    }
    td.green {
      color: green;
    }
  }
  tr:first-child td {
    border-top: 1px solid #bfbfbf;
  }
  tr td:first-child {
    border-left: 1px solid #bfbfbf;
  }
}
.table_type_1 {
  td {
    padding: 2px 5px;
  }
}
.block {
  width: 96%;
  height: 90%;
  overflow-y: scroll;
  background-color: #fff;
  font-size: 12px;
  padding: 10px;
  .title {
    padding: 10px 0px;
    .dan {
      background: #ff0000;
      color: #fff;
      margin-right: 5px;
      padding: 0px 3px;
      border-radius: 5px;
    }
  }
  .top {
    padding: 10px 0px;
    border-bottom: 1px solid #bfbfbf;
    .tit1 {
      font-size: 14px;
      font-weight: bold;
    }
  }
  .fot {
    .close {
      margin: 20px 20px 10px;
      padding: 5px 20px;
      border: 1px solid #323232;
      border-radius: 5px;
    }
    .ok {
      background: #ff9900;
      margin: 20px 20px 10px;
      padding: 5px 20px;
      color:#fff;
      border: 1px solid #ff9900;
      border-radius: 5px;
    }
  }
}
</style>