<template>
  <div>
    <!-- <Header></Header> -->
    <div class="field_box">
      <van-cell-group class="name">
        <van-field
          v-model="username"
          autosize
          required
          clearable
          label="昵称"
          placeholder="为自己取一个响亮的名字"
        />
        <van-field
          v-model="message"
          rows="1"
          autosize
          label="个人介绍"
          type="textarea"
          placeholder="一句话介绍自己不可以包含联系方式"
        />
      </van-cell-group>
      <div class="title">身份信息</div>
      <van-cell-group class="id_card">
        <van-field v-model="username" autosize required clearable label="姓名" placeholder="请输入姓名" />
        <van-field
          v-model="username"
          autosize
          required
          clearable
          type="number"
          label="身份证号"
          placeholder="请输入身份证号"
        />
        <div class="upload_box">
          <div class="ti">请上传身份证正反面</div>
          <van-uploader v-model="fileList" multiple />
        </div>
      </van-cell-group>
      <van-cell-group class="name">
        <van-field
          v-model="message"
          rows="2"
          autosize
          label="申请理由"
          type="textarea"
          maxlength="50"
          placeholder="说出你的优势、上传你的历史推荐"
          show-word-limit
        />
        <van-uploader v-model="fileList" multiple />
      </van-cell-group>
    </div>
    <div class="fot_box">
      <router-link :to="{path:'/check'}">
        <van-button class="btn" type="primary" color="#ff9900" block>提交申请</van-button>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "become_professor",
  data() {
    return {
      username: "",
      message: "",
      fileList: [
        { url: "https://img.yzcdn.cn/vant/leaf.jpg" },
        // Uploader 根据文件后缀来判断是否为图片文件
        // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
        { url: "https://cloud-image", isImage: true }
      ]
    };
  },
  methods: {}
};
</script>
<style lang="less" scoped>
.field_box {
  padding-bottom: 100px;
  .name {
    margin-top: 10px;
  }
  .title {
    padding: 10px;
    font-size: 14px;
  }
}
.upload_box {
  padding: 10px;
  .ti {
    font-size: 14px;
    padding-bottom: 20px;
  }
}
.fot_box {
  position: fixed;
  bottom: 0;
  right: 0;
  width: 100%;
  padding: 20px;
  .btn {
    border-radius: 8px;
  }
}
</style>