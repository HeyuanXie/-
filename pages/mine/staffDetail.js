// pages/mine/staffDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cates: [{
        name: '待完成'
      },
      {
        name: '已完成'
      }
    ],
    isShowFloatTab: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
    * 生命周期函数--监听页面加载
    */
  onPageScroll: function (event) {
    var scrollTop = event.scrollTop;
    if (scrollTop >= floatTop && !this.data.isShowFloatTab) {
      this.setData({
        isShowFloatTab: true,
      });
    } else if (scrollTop < floatTop && this.data.isShowFloatTab) {
      this.setData({
        isShowFloatTab: false,
      });
    }
  },

  /**
   * 获取滑动导致悬浮Tab出现的高度
   */
  getScrollTop: function() {
    var that = this;
    if (wx.canIUse('getSystemInfo.success.screenWidth')) {
      wx: wx.getSystemInfo({
        success: function (res) {
          rate = res.screenWidth / 750;
          floatTop = 84 * rate;
          that.setData({
            scrollTop: 84 * res.screenWidth / 750,
            scrollHeight: res.screenHeight / (res.screenWidth / 750) - 128,
          });
        }
      });
    }
  }
})