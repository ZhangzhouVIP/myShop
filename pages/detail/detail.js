// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item: []

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
    this.data.item.push(wx.getStorageSync("DetailItem"));
    this.setData({ item: this.data.item });
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

  addCart: function () {
    //准备传递给购物车的商品
    var item = {
      productID : this.data.item[0].productID,
      productName : this.data.item[0].productName,
      productPrice : this.data.item[0].productPrice,
      pListPicture : this.data.item[0].pListPicture,
      productSelect : true,
      productNum : 1
    };
    //缓存传递不同页面之间的数据
    wx.setStorageSync("newItem", item);
    //跳转页面
    wx.switchTab({
      url: '/pages/cart/cart',
    })

  }
})