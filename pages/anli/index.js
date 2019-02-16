// pages/anli/index.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
      type:2,
      image_nuan:[
        "https://wx3.sinaimg.cn/mw690/005KyzbTly1g0862qlqatj30l50dl7j2.jpg",
        "https://wx1.sinaimg.cn/mw690/005KyzbTly1g0862nopboj30qo0h9nj9.jpg",
        "https://wx2.sinaimg.cn/mw690/005KyzbTly1g0862rvc4zj30q20fi4qp.jpg",
        "https://wx1.sinaimg.cn/mw690/005KyzbTly1g0862nqqc3j30n60faaw1.jpg",
        "https://wx3.sinaimg.cn/mw690/005KyzbTly1g0862qdp1lj30ob0g5qrg.jpg",
        "https://wx3.sinaimg.cn/mw690/005KyzbTly1g0862r13sgj30qv0i11kx.jpg",
        "https://wx4.sinaimg.cn/mw690/005KyzbTly1g085ta48qaj30kp0duh29.jpg",
        "https://wx1.sinaimg.cn/mw690/005KyzbTly1g085tci0e8j30qi0gib23.jpg",
        "https://wx4.sinaimg.cn/mw690/005KyzbTly1g085tdfsonj30qr0ih7wh.jpg",
        "https://wx1.sinaimg.cn/mw690/005KyzbTly1g085t9s8fyj30tg0hf7jt.jpg",
        "https://wx4.sinaimg.cn/mw690/005KyzbTly1g0862ov5y3j30nk0e5nm0.jpg",
        "https://wx4.sinaimg.cn/mw690/005KyzbTly1g085taaplnj30kv0e9e3a.jpg",
        "https://wx4.sinaimg.cn/mw690/005KyzbTly1g0862rb2ixj30ke0ij4qp.jpg",
        "https://wx4.sinaimg.cn/mw690/005KyzbTly1g0869h5iznj30l90diap5.jpg",
        "https://wx2.sinaimg.cn/mw690/005KyzbTly1g0869i2s6pj30l60e8kgo.jpg",
        "https://wx4.sinaimg.cn/mw690/005KyzbTly1g0869jziy4j30l80ddwvx.jpg",
        "https://wx3.sinaimg.cn/mw690/005KyzbTly1g0869k6ingj30l50ddttx.jpg",
        "https://wx2.sinaimg.cn/mw690/005KyzbTly1g0869hu6a8j30os0dxtsi.jpg",
        "https://wx2.sinaimg.cn/mw690/005KyzbTly1g0869k0lgcj30or0euwvb.jpg",
        "https://wx3.sinaimg.cn/mw690/005KyzbTly1g0869jbnl4j30m10emau9.jpg",
        "https://wx3.sinaimg.cn/mw690/005KyzbTly1g0869knsxnj30tr0jtb29.jpg",
        "https://wx2.sinaimg.cn/mw690/005KyzbTly1g0869lbc9nj30tf0fshdt.jpg"
      ],
      image_leng:[
        "https://wx3.sinaimg.cn/mw690/005KyzbTly1g0869k6ingj30l50ddttx.jpg",
        "https://wx2.sinaimg.cn/mw690/005KyzbTly1g0869hu6a8j30os0dxtsi.jpg",
        "https://wx2.sinaimg.cn/mw690/005KyzbTly1g0869k0lgcj30or0euwvb.jpg",
        "https://wx3.sinaimg.cn/mw690/005KyzbTly1g0869jbnl4j30m10emau9.jpg",
        "https://wx3.sinaimg.cn/mw690/005KyzbTly1g0869knsxnj30tr0jtb29.jpg",
        "https://wx2.sinaimg.cn/mw690/005KyzbTly1g0869lbc9nj30tf0fshdt.jpg"
      ],
    image2: [
      "https://wx3.sinaimg.cn/mw690/005KyzbTly1g089ii8iiuj30u07nq4qr.jpg",
      "https://wx1.sinaimg.cn/mw690/005KyzbTly1g089ilfbprj30tu8c07wk.jpg",
      "https://wx3.sinaimg.cn/mw690/005KyzbTly1g089i9hr9jj30t48c0x6r.jpg",
      "https://wx4.sinaimg.cn/mw690/005KyzbTly1g089if69nmj30t68bqqv6.jpg",
      "https://wx4.sinaimg.cn/mw690/005KyzbTly1g089gc7ndij30m88c04qr.jpg",
      "https://wx3.sinaimg.cn/mw690/005KyzbTly1g089gbyt51j30ty6wku0x.jpg",
      "https://wx2.sinaimg.cn/mw690/005KyzbTly1g089g9p1g9j30ty3tsqv5.jpg",
      "https://wx2.sinaimg.cn/mw690/005KyzbTly1g08a6ws20gj30ti8bou0z.jpg",
      "https://wx3.sinaimg.cn/mw690/005KyzbTly1g089gj4hl7j30ty6rkqv7.jpg",
      "https://wx4.sinaimg.cn/mw690/005KyzbTly1g089gih9g4j30qw8c04qs.jpg",
      "https://wx1.sinaimg.cn/mw690/005KyzbTly1g089gg9sktj30qa8c0hdv.jpg",
      "https://wx1.sinaimg.cn/mw690/005KyzbTly1g089gkehffj30ty6aq4qs.jpg",
      "https://wx4.sinaimg.cn/mw690/005KyzbTly1g089in3cqjj30u07rj4qs.jpg",
      "https://wx4.sinaimg.cn/mw690/005KyzbTly1g089iquyltj30u07qokjo.jpg",
      "https://wx2.sinaimg.cn/mw690/005KyzbTly1g089iruatzj30u07sdqv9.jpg",
      "https://wx4.sinaimg.cn/mw690/005KyzbTly1g089iivvk4j30u07nl7wj.jpg",
      "https://wx3.sinaimg.cn/mw690/005KyzbTly1g089in0vzuj30u08mk4qs.jpg",
      "https://wx3.sinaimg.cn/mw690/005KyzbTly1g089kxhh5zj30u06g1x6r.jpg",
      "https://wx2.sinaimg.cn/mw690/005KyzbTly1g089l0k05sj30u09274qs.jpg",
      "https://wx4.sinaimg.cn/mw690/005KyzbTly1g089klmpq8j30m84jakjl.jpg",
      "https://wx4.sinaimg.cn/mw690/005KyzbTly1g089kw2a3fj30ty7dwe83.jpg",
      "https://wx4.sinaimg.cn/mw690/005KyzbTly1g089ksfgxxj30ty4w0hdu.jpg"
    ],
    image_lunbo:[
      "https://wx3.sinaimg.cn/mw690/005KyzbTly1g0862qlqatj30l50dl7j2.jpg",
      "https://wx1.sinaimg.cn/mw690/005KyzbTly1g0862nopboj30qo0h9nj9.jpg",
      "https://wx2.sinaimg.cn/mw690/005KyzbTly1g0862rvc4zj30q20fi4qp.jpg",
      "https://wx1.sinaimg.cn/mw690/005KyzbTly1g0862nqqc3j30n60faaw1.jpg",
      "https://wx3.sinaimg.cn/mw690/005KyzbTly1g0862qdp1lj30ob0g5qrg.jpg",
      "https://wx3.sinaimg.cn/mw690/005KyzbTly1g0862r13sgj30qv0i11kx.jpg",
      "https://wx4.sinaimg.cn/mw690/005KyzbTly1g085ta48qaj30kp0duh29.jpg"
    ]
  },
  nuan: function () {
    this.setData({type:1});
  },
  leng: function () {
    this.setData({ type: 2});
  },
  previewImg: function (e) {
    var dataset = e.target.dataset;
    var x = dataset.index;
    wx.previewImage({
      current: this.data.image2[x], // 当前显示图片的http链接  
      urls: this.data.image2 // 需要预览的图片http链接列表  
    })
  }, 
  previewImg2: function (e) {
    var dataset = e.target.dataset;
    var x = dataset.index;
    wx.previewImage({
      current: this.data.image_lunbo[x], // 当前显示图片的http链接  
      urls: this.data.image_lunbo // 需要预览的图片http链接列表  
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})