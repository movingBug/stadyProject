/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-18 21:32:19
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-19 20:38:05
 */

// 请求拦截器
import axios from 'axios';
axios.interceptors.request.use((config) => {
  return config;
}, (error) => {
  return Promise.reject(error);
})

// 响应拦截器
axios.interceptors.response.use((Response) => {
  return Response.data;
}, (error) => {
  return Promise.reject(error);
})

export default axios;

