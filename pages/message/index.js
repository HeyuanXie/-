// pages/message/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    datas: [{
        title: '任务通知',
        src: '/images/tongzhi.png'
      },
      {
        title: '计划提醒',
        src: '/images/tixing.png'
      },
      {
        title: '收款通知',
        src: '/images/shoukuantongzhi.png'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  seeDetail: function(e) {
    let index = e.currentTarget.dataset.index
    switch (index) {
      case 0:
        wx.navigateTo({
          url: './mission',
        })
      case 1:
        wx.navigateTo({
          url: './plan',
        })
      case 2:
    }
  }
})