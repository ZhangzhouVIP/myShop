const app = getApp()
var common = require('../../utils/common.js');
var util = require('../../utils/util')
var wxrequest = util.wxPromisify(wx.request)
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cur: 0,
    classID: 1001,
    types: [
      { classID: 1001, className: "水果" },
      { classID: 1002, className: "干果" },
      { classID: 1003, className: "蔬菜" }
    ],
    typeTrees: [
    ]


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // var that = this;
    // wxrequest({
    //   url: 'https://www.myyd.xyz/baas/takeoutAdmin/cuisine/queryTakeout_foodclass',
    //   data: {
    //     x: '',
    //     y: ''
    //   },
    //   header: {
    //     'content-type': 'application/json' // 默认值
    //   }
    // }).then(res => {
    //   that.setData({ types: res.data.rows });
    //   that.getTrees(that.data.fID);
    // });

    this.getTrees(this.data.classID);

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

  getCur: function (e) {
    console.log(e.currentTarget.dataset.selectindex);
    this.setData({
      cur: e.currentTarget.dataset.selectindex
    });
    this.setData({
      fID: e.currentTarget.dataset.fid
    });
    this.getTrees(this.data.fID);

  },

  getTrees: function (classID) {

    this.data.typeTrees.splice(0, this.data.typeTrees.length);

    let allItems = wx.getStorageSync("allItems");

    for (let i = 0; i < allItems.length; i++) {

      if (allItems[i].classID == classID) {

        this.data.typeTrees.push(allItems[i]);

      }
    }

    this.setData({
      typeTrees: this.data.typeTrees
    });
  },

  goDetail: function (e) {
    var productID = e.currentTarget.dataset.productid;

    let allItems = wx.getStorageSync("allItems");

    var item = {};
    allItems.forEach(element => {
      if (productID == element.productID) {
        item.productID = element.productID;
        item.productName = element.productName;
        item.productPrice = element.productPrice;
        item.productInventory = element.productInventory;
        item.productTransCost = element.productTransCost;
        item.pListPicture = element.pListPicture;
        item.productDescribe = element.productDescribe;
      }
    });

    wx.setStorageSync("DetailItem", item);


    wx.navigateTo({
      url: '../../pages/detail/detail',
    })


  },

  goSearch: function () {

    // wx.navigateTo({
    //   url: '/pages/search/search',
    // })

  }
})