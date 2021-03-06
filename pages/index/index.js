// pages/index/index.js
Page({

  /**
   * 页面的初始数据（小程序中都会向data要数据
   */
  data: {
    msg: '初始化数据'
  },

  handleParent(){
    console.log('parent');
  },
  handleChild(){
    console.log('child');
  },

  // 跳转
  toLogs() {
    // wx.navigateTo({
    //   url: '/pages/logs/logs',
    // })
    wx.redirectTo({
      url: '/pages/logs/logs',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onLoad()');
    setTimeout(() => {this.setData({
      msg: '修改之后的值'
    })}, 2000)
    
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