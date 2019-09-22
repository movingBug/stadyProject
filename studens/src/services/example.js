/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-18 21:32:19
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-21 16:06:27
 */
import request from '../utils/request';

export function login(params) {
  let url = '/api/emstu/teacher/login';
  return request.post(url, params);
}

export function register(params) {
  let url = '/api/emstu/teacher/register';
  return request.post(url, params);
}

export function getstudyList(params) {
  let url = '/api/emstu/student/lists';
  return request.get(url, {
    params
  });
}