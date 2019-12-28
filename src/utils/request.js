import Vue from 'vue'
import axios from 'axios'
import store from '@/store'

import { Modal, notification } from 'ant-design-vue'
import { ACCESS_TOKEN } from "@/store/mutation-types"
import httpConfig from "@/httpConfig";
// 创建 axios 实例
// let baseURL = process.env.NODE_ENV == 'development' ? '/proxyApi' : (process.env.NODE_ENV == 'production'?httpConfig.api_url:'');
let baseURL = process.env.NODE_ENV == 'development' ? httpConfig.api_url : (process.env.NODE_ENV == 'production' ? httpConfig.api_url : '');
const service = axios.create({
  baseURL: baseURL,
  timeout: 6000 // 请求超时时间
})

const err = (error) => {
  if (error.response) {
    let data = error.response.data
    const token = Vue.ls.get(ACCESS_TOKEN)
    console.log("------异常响应------", token)
    console.log("------异常响应------", error.response.status)
    switch (error.response.status) {
      case 403:
        notification.error({ message: '系统提示', description: '拒绝访问', duration: 4 })
        break
      case 500:
        notification.error({ message: '系统提示', description: '内部服务器错误', duration: 4 })
        if (token && data.message == "Token失效，请重新登录") {
          //  Token失效采用弹框模式，不直接跳转
          // store.dispatch('Logout').then(() => {
          //     window.location.reload()
          // })
          Modal.error({
            title: '登录已过期',
            content: '很抱歉，登录已过期，请重新登录',
            okText: '重新登录',
            mask: false,
            onOk: () => {
              store.dispatch('Logout').then(() => {
                Vue.ls.remove(ACCESS_TOKEN)
                window.location.reload()
              })
            }
          })
          // update-end- --- author:scott ------ date:20190225 ---- for:Token失效采用弹框模式，不直接跳转----
        }
        break
      case 404:
        notification.error({ message: '系统提示', description: '很抱歉，资源未找到!', duration: 4 })
        break
      case 504:
        notification.error({ message: '系统提示', description: '网络超时' })
        break
      case 401:
        notification.error({ message: '系统提示', description: '未授权，请重新登录', duration: 4 })
        if (token) {
          store.dispatch('LogOut').then(() => {
            setTimeout(() => {
              window.location.reload()
            }, 1500)
          })
        }
        break
      default:
        notification.error({
          message: '系统提示',
          description: data.message,
          duration: 4
        })
        break
    }
  }
  return Promise.reject(error)
};

// request interceptor(请求拦截)
service.interceptors.request.use(config => {
  const token = Vue.ls.get(ACCESS_TOKEN)
  if (token) {
    config.headers['token'] = 'Bearer ' + token // 让每个请求携带自定义 token 请根据实际情况自行修改
  }
  if (config.method == 'get') {
    config.params = {
      // _t: Date.parse(new Date()) / 1000,
      ...config.params
    }
  }
  return config
}, (error) => {
  return Promise.reject(error)
})

// response interceptor（响应拦截）
service.interceptors.response.use((response) => {
  if(response.data.ret == 10004030){
    // notification.error({ message: '系统提示', description: response.data.msg, duration: 4 });
    Modal.error({
      title: '登录已过期',
      content: '很抱歉，登录已过期，请重新登录',
      okText: '重新登录',
      mask: false,
      onOk: () => {
        store.dispatch('LogOut').then(() => {
          window.location.reload()
        })
      }
    })
  }else if(response.data.ret == 10001004){
    // notification.error({ message: '系统提示', description: response.data.msg, duration: 4 });
    Modal.error({
      title: '系统提示',
      content: response.data.msg,
      okText: '重新登录',
      mask: false,
      onOk: () => {
        store.dispatch('LogOut').then(() => {
          window.location.reload()
        })
      }
    })
  }else if(response.data.ret == 10004040){
    notification.error({ message: '系统提示', description: response.data.msg, duration: 4 });
  }
  return response.data
}, err)



export {
  service as axios
}