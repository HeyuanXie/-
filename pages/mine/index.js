// pages/mine/index.js
let app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  onShow: function () {
    this.setData({
      app: getApp()
    })
  },

  // 选择图片
  chooseImg: function (e) {
    var that = this;
    var imgs = this.data.imgs;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        //返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;
        that.uploadImg(tempFilePaths[0])
      }
    });
  },

  uploadImg: function (path) {
    let that = this
    app.uploadImg(path, function (e) {
      that.setData({
        fileName: e.filename,
        fileUrl: e.url
      })
      that.changeFace()
    })
  },

  changeFace: function () {
    let param = {
      face: this.data.fileName
    }
    app.post('user/update', param).then((data) => {
      if (data.code == 0) {
        app.globalData.userInfo.face = this.data.fileUrl
        this.setData({
          app: getApp()
        })
        wx.showToast({
          title: '修改成功',
          icon: 'none'
        })
      }
    })
  },

  logout: function () {
    wx.setStorageSync('token', '')
    let password = wx.getStorageSync('password')
    password.password = ''
    wx.setStorageSync('password', password)
    wx.reLaunch({
      url: '../login/index',
    })
  }
})