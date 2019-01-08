// pages/chance/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cates: [{
        name: '未转化'
      },
      {
        name: '已转化'
      }
    ],
    dataArray: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.fetchData()
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

  seeDetail: function(e) {
    wx.navigateTo({
      url: './detail',
    })
  },

  fetchData: function() {
    this.setData({
      dataArray: ['', '', '', '', '', '', '', '']
    })
  },

  addData: function() {
    wx.navigateTo({
      url: './add',
    })
  },

  clickTab: function() {
    
  }
})