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
  scanCode(){
    wx.scanCode({
      onlyFromCamera: true,
      success: (res) => {
        console.log(res)
        console.log(res.result)
        if (err.errMsg.includes('ok')) {
          app.util.showInfo(res.result)
        }
      },
      fail:(err)=>{
        console.log(err)
        if (err.errMsg.includes('cancel')){
          app.util.showInfo('取消扫码')
        }
      }
    })
  },


  // 请求【范例】
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
