// pages/mall/mall.js
let app = getApp();
Page({
  data: {
    cityList: ['南京市', '苏州', '无锡', '常州', '镇江', '南通', '泰州', '扬州', '盐城', '淮安', '宿迁', '徐州','连云港'],
    isCityPanel: false,
    currIndex: 0,   // city下标
    scrollLeft: 0,
    screenW: wx.getSystemInfoSync().windowWidth,
    currTabId: 'active',      // scroll-id
  },
  // -----------------------------city选择与滚动定位---------------------------
  // 滑动的选择
  selectCity(e) {
    let _index = e.currentTarget.dataset.index;
    let halfScrollW = (this.data.screenW - 88) / 2;
    this.setData({
      currTabId: 'active',
      currIndex: _index,
      scrollLeft: e.target.offsetLeft - halfScrollW
    })
    this.handleCurrIndex(_index);
  },
  // 面板的选择
  panelSelectCity(e) {
    let _index = e.currentTarget.dataset.index,
      _currTabId = 'active' + _index;
    this.setData({
      currIndex: _index,
      isCityPanel: false,
      currTabId: _currTabId
    })
    this.handleCurrIndex(_index);
  },
  toggleCityPanel(e) {
    this.setData({
      isCityPanel: !this.data.isCityPanel
    })
  },
  // -----------------------------city选择与滚动定位---------------------------
  handleCurrIndex(index) {
    console.log(`${index}:${this.data.cityList[index]}`);
  },
  onLoad: function (options) {
   
  },
  onReady: function () {

  },
  onShow: function () {
   
  }
})