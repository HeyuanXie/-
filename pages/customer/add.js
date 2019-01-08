// pages/customer/add.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: ['', '', '', '']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  
  // 添加联系人
  addContact: function() {
    wx.navigateTo({
      url: './addContacter',
    })
  },

  // 选择所在市场
  selectMarket: function() {
    wx.navigateTo({
      url: '../work/select?contentType=2',
    })
  },

  // 选择业务类型
  selectType: function() {
    wx.navigateTo({
      url: '../work/select?contentType=1',
    })
  }
})