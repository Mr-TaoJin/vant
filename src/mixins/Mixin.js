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
      }
    }
  },
  created() {

  },
  methods: {
    // 获取列表数据
    loadData(arg) {
      
    },
    
  }

}