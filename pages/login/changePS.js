// pages/login/changePS.js
let app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  forget: function() {
    wx.navigateTo({
      url: './findPS',
    })
  },

  oldInput: function(e) {
    this.setData({
      oldPassword: e.detail.value
    })
  },

  newInput: function (e) {
    this.setData({
      newPassword: e.detail.value
    })
  },

  confirmInput: function (e) {
    this.setData({
      confirmPassword: e.detail.value
    })
  },

  confirm: function() {
    if (this.data.oldPassword == '') {
      wx.showToast({
        title: '请输入旧密码',
        icon: 'none'
      })
      return;
    }
    if (this.data.newPassword == '') {
      wx.showToast({
        title: '请输入新密码',
        icon: 'none'
      })
      return;
    }
    if (this.data.confirmPassword == '') {
      wx.showToast({
        title: '请再次确认新密码',
        icon: 'none'
      })
      return;
    }
    if (this.data.newPassword != this.data.confirmPassword) {
      wx.showToast({
        title: '两次输入的密码不一致，请确认',
        icon: 'none'
      })
      return;
    }
    this.commit()
  },

  commit: function () {
    let param = {
      old_password: this.data.oldPassword,
      new_password: this.data.newPassword
    }
    app.post('user/resetPassword', param).then((data) => {
      if (data.code == 0) {
        let password = wx.getStorageSync('password')
        password.password = ''
        wx.setStorageSync('password', password)
        wx.showToast({
          title: '修改成功',
          icon: 'none',
          complete: function () {
            wx.reLaunch({
              url: './login',
            })
          }
        })
      }
    })
  },
})