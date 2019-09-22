/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-18 21:32:19
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-22 20:01:52
 */
import { login, register, getstudyList } from '../../services/example';
import { setCookie, getCookie } from '../../utils/opertionCookie';

const account = '';

if (getCookie()) {
  account = getCookie();
}

export default {

  namespace: 'example',

  state: {
    registermsg: '',
    loginmsg: '',
    studylist: [],
    isShow: false
  },

  effects: {
    //登录
    *loginTest({ payload }, { put, call, select }) {

      const params = {
        username: payload.phonenum,
        password: payload.password,
      }
      let result = yield call(login, params);
      // const cookie = yield select(state => state.cookie);
      // console.log(cookie);
      //七天免登陆
      if (payload.isChecked) {
        setCookie(account);
      }
      yield put({ type: 'changeLoginmsg', payload: result.msg })
    },
    //注册
    *sendregister({ payload }, { put, call }) {

      const params = {
        username: payload.phonenum,
        password: payload.password
      }
      let result = yield call(register, params);
      if (result.code === 1) {
        yield put({ type: 'changeRegistermsg', payload: result.msg })
      } else {
        yield put({ type: 'changeRegistermsg', payload: result.msg.sqlMessage })
      }
    },

    *getStudylist({ payload }, { put, call }) {
      let params = {
        cid: 'qZjErkS7YXZXPtskUrMRBeA6luJbj6kTviODJq1QGqc'
      }
      let result = yield call(getstudyList, { ...params });
      console.log(result);
    }
  },

  reducers: {
    changeLoginmsg(state, { payload }) {
      return { ...state, loginmsg: payload }
    },
    changeRegistermsg(state, { payload }) {
      return { ...state, registermsg: payload }
    },
    addlist(state, { payload }) {
      return { ...state, studylist: payload }
    },
    changeShow(state, { payload }) {
      return { ...state, isShow: !state.isShow }
    }
  },

};
