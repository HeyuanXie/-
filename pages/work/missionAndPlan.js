// pages/work/missionAndPlan.js
Page({

  data: {
    dataArray: [],
    items: [
      { missionType: '0', title: '上级任务', checked: 'true' },
      { missionType: '1', title: '我的计划'}
    ],
    selectMissionType: '0',
    cates: [
      {
        name: '待完成'
      },
      {
        name: '已完成'
      }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.fetchData()
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

  radioChange: function (e) {
    this.setData({
      selectMissionType: e.detail.value
    });
  },

  fetchData: function() {
    this.setData({
      dataArray: ['','','','']
    })
  },

  seeDetail: function(e) {
    wx.navigateTo({
      url: './missionDetail',
    })
  },

  deleteData: function() {

  },

  feedback: function() {
    wx.navigateTo({
      url: './feedback',
    })
  },
  
  addData: function() {
    wx.navigateTo({
      url: './create',
    })
  },
  
  clickTab: function() {
    
  }
})