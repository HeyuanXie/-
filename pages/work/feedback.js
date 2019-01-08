// pages/work/feedback.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgs: [],
    description: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  inputDescFinish: function (res) {
    this.setData({
      description: res.detail.value
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

  // 删除图片
  deleteImg: function (e) {
    var imgs = this.data.imgs;
    var index = e.currentTarget.dataset.index;
    imgs.splice(index, 1);
    this.setData({
      imgs: imgs
    });
  },

  // 预览图片
  previewImg: function (e) {
    let src = e.currentTarget.dataset.src
    let imgs = [src]
    wx.previewImage({
      current: src,
      urls: imgs
    })
  },

  uploadImg: function (path) {
    let that = this
    app.uploadImg(path, function (e) {
      let imgs = that.data.imgs
      imgs.push(e.fileId)
      that.setData({
        imgs: imgs
      })
    })
  },

  confirm: function () {
    var fileIds = ''
    for (var index in this.data.imgs) {
      fileIds += this.data.imgs[index]
      if (index != this.data.imgs.count - 1) {
        fileIds += ','
      }
    }
    let param = {
      name: this.data.name,
      description: this.data.description,
      fileIds: this.data.imgs,
      osn: this.data.osn,
      process: this.data.process
    }
    app.post('save/exception', param, 'task').then((data) => {
      if (data.success == true) {
        wx.showToast({
          title: '提交成功',
          icon: 'none',
          complete: function () {
            wx.navigateBack({

            })
          }
        })
      }
    })
  }
})