// pages/customer/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data: {},
    systemInfo: {},   //系统信息，width、height
    contentScrollHeight: 0,
    toView: 'base' //指定跳转的view的id
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.fetchData()
    let that = this
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          systemInfo: res,
          contentScrollHeight: res.windowHeight-60-60
        })
      },
    })
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.fetchData()
  },

  fetchData: function() {

  },

  clickTopTab: function(e) {
    let id = e.currentTarget.dataset.id
    let that = this
    that.setData({
      toView: id
    })
  }
})