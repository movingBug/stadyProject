/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-19 19:27:37
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-19 19:34:14
 */
const context = require.context('./module', false, /\.js$/);
const getModel = context.keys().map(key => context(key));
export function createModel(app) {
    return getModel.map(key => app.model(key.default))
};