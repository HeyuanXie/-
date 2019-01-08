// pages/home/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    grids: [{
      name: "任务计划",
      img: "../../images/renwujihua.png",
      url: "../work/missionAndPlan"
    },
    {
      name: "跟进记录",
      img: "../../images/genjinjilu.png",
      url: "../work/record"
    },
    {
      name: "合同",
      img: "../../images/hetong.png",
      url: "../contract/contract"
    },
    {
      name: "商机",
      img: "../../images/shangji.png",
      url: "../chance/index"
    },
    ],
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

  gridBtnClick: function(e) {
    let url = e.currentTarget.dataset.url
    wx.navigateTo({
      url: url,
    })
  }
})