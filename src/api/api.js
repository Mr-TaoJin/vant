import { getAction, postAction, deleteAction, putAction } from '@/api/manage'

/**
* 首页接口--------------------------------------------------------
* @date 2019-12-27
* @author Jason
**/

// 取消发布关于我们
const questionCancelpublish = (params) => getAction("/nws/faq/cancelpublish", params);


export {
 questionCancelpublish
}