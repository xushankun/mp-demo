//index.js
const app = getApp()

Page({
  data: {
    bannerList: [
      '../../images/index/banner1.png',
      '../../images/index/banner2.png',
      '../../images/index/banner3.png'
    ],
    currentTab:1
  },
  bindchange(e){
    this.setData({
      currentTab: e.detail.current
    });
  },

  // 接口请求【范例】
  requestDemo(){
    let obj = {}    
    app.api.loginwx(obj).then(res => {
      // handle results
    })
  },
  onLoad: function () {
    // this.requestDemo();
  }
})
