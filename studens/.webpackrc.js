/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-18 21:32:19
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-21 15:03:28
 */
const path = require('path')

export default {
  proxy: {
    "/api": {
      "target": "http://148.70.121.59:9001",
      "changeOrigin": true,
      "pathRewrite": {
        "^/api": ""
      }
    }
  },
  "alias": {
    "@": path.join(__dirname, "./src")
  },
  "extraBabelPlugins": [
    ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }]
  ],
}
