import Vue from 'vue'
import axios from 'axios'
import store from '@/store'

import { Toast } from 'vant'
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
        Toast('提示内容');
        break
      case 500:
        Toast('提示内容');
        if (token && data.message == "Token失效，请重新登录") {
          Toast('提示内容');
          // update-end- --- author:scott ------ date:20190225 ---- for:Token失效采用弹框模式，不直接跳转----
        }
        break
      case 404:
        Toast('提示内容');
        break
      case 504:
        Toast('提示内容');
        break
      case 401:
        Toast('提示内容');
        if (token) {
          store.dispatch('LogOut').then(() => {
            setTimeout(() => {
              window.location.reload()
            }, 1500)
          })
        }
        break
      default:
        Toast('提示内容');
        break
    }
  }
  return Promise.reject(error)
};

// request interceptor(请求拦截)
service.interceptors.request.use(config => {
  const token = Vue.ls.get(ACCESS_TOKEN);
  if (token) {
    config.headers['token'] = token // 让每个请求携带自定义 token 请根据实际情况自行修改
  }
  if (config.method == 'get') {
    config.params = {
      // _t: Date.parse(new Date()) / 1000,
      ...config.params
    }
  }
  console.log(config);
  return config
}, (error) => {
  return Promise.reject(error)
})

// response interceptor（响应拦截）
service.interceptors.response.use((response) => {
  if(response.data.ret == 10004030){
    Toast('提示内容');
  }else if(response.data.ret == 10001004){
    Toast('提示内容');
  }else if(response.data.ret == 10004040){
    Toast('提示内容');
  }
  return response.data
}, err)



export {
  service as axios
}