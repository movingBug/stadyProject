/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-20 11:27:48
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-20 11:56:59
 */
import Cookie from 'js-cookie';

let key = 'sessionid';

const value = () => {
    return Cookie.get(key);
}

export function setCookie() {
    console.log(value());
    return Cookie.set(key, value, { expires: 7 });
}

export function removeCookie() {
    return Cookie.remove(key);
}