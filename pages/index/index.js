//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    image_lunbo: [
      "https://wx3.sinaimg.cn/mw690/005KyzbTly1g0862qlqatj30l50dl7j2.jpg",
      "https://wx1.sinaimg.cn/mw690/005KyzbTly1g0862nopboj30qo0h9nj9.jpg",
      "https://wx2.sinaimg.cn/mw690/005KyzbTly1g0862rvc4zj30q20fi4qp.jpg",
      "https://wx1.sinaimg.cn/mw690/005KyzbTly1g0862nqqc3j30n60faaw1.jpg",
      "https://wx3.sinaimg.cn/mw690/005KyzbTly1g0862qdp1lj30ob0g5qrg.jpg",
      "https://wx3.sinaimg.cn/mw690/005KyzbTly1g0862r13sgj30qv0i11kx.jpg",
      "https://wx4.sinaimg.cn/mw690/005KyzbTly1g085ta48qaj30kp0duh29.jpg"
    ],
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    imglist: ["https://wx4.sinaimg.cn/mw690/005KyzbTly1g077fr34zpj30ty6wku0x.jpg"]
  },
  previewImage: function (e) {
    var current = e.target.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接  
      urls: this.data.imglist // 需要预览的图片http链接列表  
    })
  }, 
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  tiaozhuan:function(){
    wx.navigateTo({
      url: '../anli/index'
    })
  },
  zhuchiren: function () {
    wx.navigateTo({
      url: '../zhuchiren/index'
    })
  },
  anli: function () {
    wx.navigateTo({
      url: '../anli/index'
    })
  },
  hunlidianying: function () {
    wx.navigateTo({
      url: '../hunlidianying/index'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
