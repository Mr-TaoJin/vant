/**
 * 新增修改完成调用 modalFormOk方法 编辑弹框组件ref定义为modalForm
 * data中url定义 list为查询列表  delete为删除单条记录  deleteBatch为批量删除
 */
import { filterObj } from '@/utils/util';
import { deleteAction, postAction, downFile } from '@/api/manage'
import Vue from 'vue'
import { ACCESS_TOKEN } from "@/store/mutation-types"

export const ListMixin = {
  data() {
    return {
      //当天时间
      todayString: new Date().getFullYear() + '-' + (new Date().getMonth() + 1 < 10 ? '0' + (new Date().getMonth() + 1) : new Date().getMonth() + 1) + '-' + (new Date().getDate() < 10 ? '0' + new Date().getDate() : new Date().getDate()),
      //token header
      tokenHeader: { 'Authorization': Vue.ls.get(ACCESS_TOKEN) },
      /* 数据源 */
      dataSource: [],
      /* 查询条件-请不要在filterData中声明非字符串值的属性 */
      filterData: {},
      /* 查询排序参数 ASC DESC*/
      sortDatas: [{ direction: "DESC", sortParam: "createTime" }],
      /* 查询分页参数 */
      pageData: {
        page: 0,
        pageSize: 10
      },
      /* table加载状态 */
      loading: false,
      /* table选中keys*/
      selectedRowKeys: [],
      /* table选中records*/
      selectionRows: [],
      /* 查询折叠 */
      toggleSearchStatus: false,
      /* 是否分页查询 */
      isPage: true,
      /* table分页参数 */
      ipagination: {
        current: 1,//当前页
        pageSize: 10,
        pageSizeOptions: ['10', '20', '30'],
        showTotal: (total, range) => {
          return range[0] + "-" + range[1] + " 共" + total + "条"
        },
        showQuickJumper: true,
        showSizeChanger: true,
        total: 0
      }
    }
  },
  created() {

  },
  methods: {
    // 获取列表数据
    loadData(arg) {
      if (!this.url.list) {
        this.$message.error("请设置url.list属性!")
        return
      }
      //加载数据 若传入参数1则加载第一页的内容
      if (arg === 1) {
        this.ipagination.current = 1;
        this.pageData.page = 0;
      }
      var params = this.getQueryParams();//查询条件
      this.loading = true;
      postAction(this.url.list, params).then((res) => {
        if (res.ret == 0) {
          this.dataSource = res.data.content;
          this.ipagination.total = res.data.totalElements;
        }
        this.loading = false;
      }).finally(() => {
        this.loading = false;;
      });
    },
    //获取查询条件
    getQueryParams() {
      var param = { sortDatas: this.sortDatas, filterData: this.filterData, pageData: this.pageData };
      return filterObj(param);
    },
    // 手动点击查询默认第一页
    searchQuery() {
      this.loadData(1);
    },
    // 重置
    searchReset() {
      this.filterData = {}
      this.loadData(1);
    },
    // 新增/修改 成功时，重载列表
    modalFormOk() {
      this.loadData();
    },
    // 折叠
    handleToggleSearch() {
      this.toggleSearchStatus = !this.toggleSearchStatus;
    },
    // 新增
    handleAdd: function () {
      this.$refs.modalForm.add();
      this.$refs.modalForm.title = "新增";
      this.$refs.modalForm.disableSubmit = false;
      this.$refs.modalForm.isDisabled = false;
    },
    // 编辑
    handleEdit: function (record) {
      this.$refs.modalForm.edit(record);
      this.$refs.modalForm.title = "编辑";
      this.$refs.modalForm.disableSubmit = false;
    },
    // 查看详情
    handleDetail: function (record) {
      this.$refs.modalForm.edit(record);
      this.$refs.modalForm.title = "详情";
      this.$refs.modalForm.disableSubmit = true;
    },
    // 表格触发事件
    handleTableChange(pagination, filters, sorter) {
      // console.log(pagination, filters, sorter);
      //分页、排序、筛选变化时触发
      //TODO 筛选
      if (Object.keys(sorter).length > 0) {
        this.isorter.column = sorter.field;
        this.isorter.order = "ascend" == sorter.order ? "asc" : "desc"
      }
      this.pageData.page = pagination.current - 1;
      this.pageData.pageSize = pagination.pageSize;
      this.ipagination = pagination;
      this.loadData();
    },
    // 单条删除
    handleDelete: function (id) {
      if (!this.url.delete) {
        this.$message.error("请设置url.delete属性!")
        return
      }
      var that = this;
      deleteAction(that.url.delete, { id: id }).then((res) => {
        if (res.ret == 0) {
          that.$message.success(res.msg);
          that.loadData();
        } else {
          that.$message.warning(res.msg);
        }
      });
    },
    // 批量删除（暂时不做批量删除功能）
    batchDel: function () {
      if (!this.url.deleteBatch) {
        this.$message.error("请设置url.deleteBatch属性!")
        return
      }
      if (this.selectedRowKeys.length <= 0) {
        this.$message.warning('请选择一条记录！');
        return;
      } else {
        var ids = "";
        for (var a = 0; a < this.selectedRowKeys.length; a++) {
          ids += this.selectedRowKeys[a] + ",";
        }
        var that = this;
        this.$confirm({
          title: "确认删除",
          content: "是否删除选中数据?",
          onOk: function () {
            deleteAction(that.url.deleteBatch, { ids: ids }).then((res) => {
              if (res.success) {
                that.$message.success(res.message);
                that.loadData();
                that.onClearSelected();
              } else {
                that.$message.warning(res.message);
              }
            });
          }
        });
      }
    },
    /* 导出 */
    handleExportXls(fileName,param) {
      if (!fileName || typeof fileName != "string") {
        fileName = "导出文件"
      }
      if (this.selectedRowKeys && this.selectedRowKeys.length > 0) {
        param['selections'] = this.selectedRowKeys.join(",")
      }
      downFile(this.url.exportXlsUrl, param).then((data) => {
        if (!data) {
          this.$message.warning("文件下载失败")
          return
        }
        if (typeof window.navigator.msSaveBlob !== 'undefined') {
          window.navigator.msSaveBlob(new Blob([data]), fileName + '.xls')
        } else {
          let url = window.URL.createObjectURL(new Blob([data]));
          let link = document.createElement('a');
          link.style.display = 'none';
          link.href = url;
          link.setAttribute('download', fileName + '.xls');
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link); //下载完成移除元素
          window.URL.revokeObjectURL(url); //释放掉blob对象
        }
      })
    },


    // --------------------------下面代码暂时用不到----------------------------
    onSelectChange(selectedRowKeys, selectionRows) {
      this.selectedRowKeys = selectedRowKeys;
      this.selectionRows = selectionRows;
    },
    onClearSelected() {
      this.selectedRowKeys = [];
      this.selectionRows = [];
    },

    superQuery() {
      this.$refs.superQueryModal.show();
    },



    /* 导入 */
    handleImportExcel(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        if (info.file.response.success) {
          this.$message.success(`${info.file.name} 文件上传成功`);
          this.loadData();
        } else {
          this.$message.error(`${info.file.name} ${info.file.response.message}.`);
        }
      } else if (info.file.status === 'error') {
        this.$message.error(`文件上传失败: ${info.file.msg} `);
      }
    },
    /* 图片预览 */
    getImgView(text) {
      if (text && text.indexOf(",") > 0) {
        text = text.substring(0, text.indexOf(","))
      }
      return window._CONFIG['imgDomainURL'] + "/" + text
    },
    /* 文件下载 */
    uploadFile(text) {
      if (!text) {
        this.$message.warning("未知的文件")
        return;
      }
      if (text.indexOf(",") > 0) {
        text = text.substring(0, text.indexOf(","))
      }
      window.open(window._CONFIG['domianURL'] + "/sys/common/download/" + text);
    },
  }

}