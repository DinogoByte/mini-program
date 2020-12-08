const app = getApp();

Page({
  data: {
    name: 'Dino',
    now: app.globalData.now
  },
  buttonHandler(event) {
    const that = this;
    wx.showModal({
      title:'操作确认',
      content: '确认要修改吗？',
      success (res) {
        if (res.confirm) {
          that.setData({
            name: '现在是' + app.globalData.now
          }, function () {
            wx.showToast({title: 'success'})
          });
        } else if (res.cancel) {
          console.log('canceled')
        }
      }
    })
  }
});