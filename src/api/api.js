import { getAction, postAction, deleteAction, putAction } from '@/api/manage'

/**
* 首页接口--------------------------------------------------------
* @date 2020-01-11
* @author Jason
**/

// 接口测试
const testGet = (params) => getAction("/url/testGet", params);
const testPost = (params) => postAction("/url/testPost", params);
const testDelete = (params) => deleteAction("/url/testDelete", params);
const testput = (params) => putAction("/url/testput", params);


export {
  testGet,
  testPost,
  testDelete,
  testput
}