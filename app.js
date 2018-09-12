//app.js
const apiConfig = require('./utils/request.js').apiConfig;
const api = require('./utils/api.js');
const util = require('./utils/util.js');

App({
  apiConfig: apiConfig,
  api: api,
  util: util,
  onLaunch: function () {
   
  },
  globalData: {
    // userInfo: null
  },
  // prevPage
  prevPage: function () {
    let pages = getCurrentPages(); //当前页面
    return pages[pages.length - 2]; //上一页面
  }
})