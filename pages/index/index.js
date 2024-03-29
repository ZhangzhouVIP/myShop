//index.js
//获取应用实例
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      { image: '../../image/swipe-img/heblin.jpg', productID: '1001' },
      { image: '../../image/swipe-img/pear.jpg', productID: '1002' },
      { image: '../../image/swipe-img/peach.jpg', productID: '1003' },
      { image: '../../image/swipe-img/Grape.jpg', productID: '1004' },
      { image: '../../image/swipe-img/apple.jpg', productID: '1005' },
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 2000,
    // 商品集合（数组）
    items: [
      { productID: '1001', classID: 1001, productName: '黑布林', productInventory: 100, productTransCost: 0, productPrice: 29.9, swiperPicture: '../../image/swipe-img/heblin.jpg', pListPicture: '../../image/list-img/heblin.jpg', productDescribe: '【陕西渭南水果】超甜黄肉黑布林 当季现摘水果每箱5斤包邮' },
      { productID: '1002', classID: 1001, productName: '早酥梨', productInventory: 80, productTransCost: 0, productPrice: 28.8, swiperPicture: '../../image/swipe-img/pear.jpg', pListPicture: '../../image/list-img/pear.jpg', productDescribe: '【陕西渭南水果】超甜多汁早酥梨 当季现摘水果每箱5斤包邮' },
      { productID: '1003', classID: 1001, productName: '水蜜桃', productInventory: 70, productTransCost: 0, productPrice: 39.5, swiperPicture: '../../image/swipe-img/peach.jpg', pListPicture: '../../image/list-img/peach.jpg', productDescribe: '【陕西渭南水果】超甜多汁水蜜桃 当季现摘水果每箱5斤包邮' },
      { productID: '1004', classID: 1001, productName: '红富士', productInventory: 120, productTransCost: 0, productPrice: 40, swiperPicture: '../../image/swipe-img/apple.jpg', pListPicture: '../../image/list-img/apple.jpg', productDescribe: '【陕西渭南水果】热卖红富士 当季现摘水果每箱5斤包邮' },
      { productID: '1005', classID: 1001, productName: '紫珍珠', productInventory: 300, productTransCost: 0, productPrice: 40.5, swiperPicture: '../../image/swipe-img/Grape.jpg', pListPicture: '../../image/list-img/Grape.jpg', productDescribe: '【陕西渭南水果】超甜紫珍珠 当季现摘水果每箱5斤包邮' },
      { productID: '1006', classID: 1002, productName: '红枣', productInventory: 50, productTransCost: 0, productPrice: 55.5, swiperPicture: '', pListPicture: '../../image/list-img/jujube.jpg', productDescribe: '【陕西渭南干果】香甜红枣 当季现摘水果每箱5斤包邮' },
      { productID: '1007', classID: 1002, productName: '枸杞', productInventory: 36, productTransCost: 0, productPrice: 44.5, swiperPicture: '', pListPicture: '../../image/list-img/barbarum.jpg', productDescribe: '【陕西渭南干果】营养枸杞 当季现摘水果每箱5斤包邮' },
      { productID: '1008', classID: 1003, productName: '红萝卜', productInventory: 500, productTransCost: 0, productPrice: 1.5, swiperPicture: '', pListPicture: '../../image/list-img/carrot.jpg', productDescribe: '【陕西渭南蔬菜】超赞红萝卜 当季现摘水果每箱5斤包邮' },
      { productID: '1009', classID: 1003, productName: '大白菜', productInventory: 40, productTransCost: 0, productPrice: 4.5, swiperPicture: '', pListPicture: '../../image/list-img/cabbage.jpg', productDescribe: '【陕西渭南蔬菜】棒棒哒大白菜 当季现摘水果每箱5斤包邮' },
      { productID: '1010', classID: 1003, productName: '西兰花', productInventory: 35, productTransCost: 0, productPrice: 5.5, swiperPicture: '', pListPicture: '../../image/list-img/broccoli.jpg', productDescribe: '【陕西渭南蔬菜】无敌西兰花 当季现摘水果每箱5斤包邮' }
    ],

    item: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.setStorageSync("allItems", this.data.items);/* 将模拟数据放入缓存 */

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
    /* 设置购物车商品种数 */
    let cartProNum = String(wx.getStorageSync("cartProNum"));
    if (null != cartProNum && '' != cartProNum && '0' != cartProNum) {
      wx.setTabBarBadge({
        index: 2,
        text: cartProNum,
      })
    } else {
      wx.removeTabBarBadge({ index: 2 });
    }


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

  /*点击轮播图事件*/
  clickSwiper: function (e) {
    console.log(e);
  },

  /*点击列表事件*/
  goDetail: function (e) {

    var productID = e.currentTarget.dataset.productid;

    var item = {};
    this.data.items.forEach(element => {
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

  addcart: function (e) {
    // console.log(e.currentTarget.dataset.index);
    let index = e.currentTarget.dataset.index;
    //准备传递给购物车的商品
    var item = {
      productID: this.data.items[index].productID,
      productName: this.data.items[index].productName,
      productPrice: this.data.items[index].productPrice,
      pListPicture: this.data.items[index].pListPicture,
      productSelect: true,
      productNum: 1
    };
    //缓存传递不同页面之间的数据
    wx.setStorageSync("newItem", item);
    //跳转页面
    wx.switchTab({
      url: '/pages/cart/cart',
    })
  },

  goSearch: function () {

    wx.navigateTo({
      url: '/pages/search/search',
    })
  }

})