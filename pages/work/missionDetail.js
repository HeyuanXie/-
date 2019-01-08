// pages/work/missionDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    contentType: 0, //0-任务详情，1-计划详情
    missionTime: '2019-01-03 14:00',
    alertTime: '工作开始时',
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let contentType = options.contentType
    this.setData({
      contentType: contentType
    })
    if (contentType == 1) {
      wx.setNavigationBarTitle({
        title: '计划详情',
      })
    }else{
      wx.setNavigationBarTitle({
        title: '任务详情',
      })
    }
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },
})