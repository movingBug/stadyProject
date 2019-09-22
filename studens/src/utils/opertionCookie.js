/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-20 11:27:48
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-21 16:17:28
 */
import Cookie from 'react-cookies';

let key = 'sessionid';

const value = () => {
    return Cookie.get(key);
}

export function getCookie(){
    return Cookie.load(key);
}

export function setCookie(value) {
    console.log(value);
    return Cookie.set(key, value, { expires: 7 });
}

export function removeCookie() {
    return Cookie.remove(key);
}