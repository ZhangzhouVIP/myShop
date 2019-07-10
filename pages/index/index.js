//index.js
//获取应用实例
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '../../image/swipe-img/heblin.jpg',
      '../../image/swipe-img/pear.jpg',
      '../../image/swipe-img/peach.jpg',
      '../../image/swipe-img/Grape.jpg',
      '../../image/swipe-img/apple.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 2000,
    // 商品集合（数组）
    items: [
      {"productID":"001", "productName":"黑布林", "productPrice":"29.9", "pListPicture":"../../image/list-img/heblin.jpg"},
      {"productID":"002", "productName":"早酥梨", "productPrice":"29.9", "pListPicture":"../../image/list-img/pear.jpg"},
      {"productID":"003", "productName":"水蜜桃", "productPrice":"29.9", "pListPicture":"../../image/list-img/peach.jpg"},
      {"productID":"004", "productName":"红富士", "productPrice":"29.9", "pListPicture":"../../image/list-img/apple.jpg"},
      {"productID":"005", "productName":"紫珍珠", "productPrice":"29.9", "pListPicture":"../../image/list-img/Grape.jpg"}
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    // wx.request({
    //   url: 'https://www.myyd.xyz/baas/takeoutAdmin/cuisine/queryTakeout_food', 
    //   data: {
    //     x: '',
    //     y: ''
    //   },
    //   header: {
    //     'content-type': 'application/json' // 默认值
    //   },
    //   success(res) {
    //     console.log(res.data.rows);
    //     wx.setStorageSync("allItems", res.data.rows);
    //     that.setData({items: res.data.rows});

    //   }
    // }) ;

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
    
  },

  goDetail: function (e) {
    console.log(e.currentTarget.dataset.index);
    // let i = e.currentTarget.dataset.index;
    // var item = {
    //   fID: {
    //     value: this.data.items[i].fID.value
    //   },
    //   fName: {
    //     value: this.data.items[i].fName.value
    //   },
    //   fPrice: {
    //     value: this.data.items[i].fPrice.value
    //   },
    //   fDescription: {
    //     value: this.data.items[i].fDescription.value
    //   },
    //   ownerID: {
    //     value: this.data.items[i].ownerID.value
    //   },
    //   storeFileName: {
    //     value: this.data.items[i].storeFileName.value
    //   },
    //   fSellNum: {
    //     value: this.data.items[i].fSellNum.value
    //   }
    // };

    // wx.setStorageSync("DetailItem", item);


    // wx.navigateTo({
    //   url: '/pages/detail/detail',
    // })

  }
})