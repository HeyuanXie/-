// pages/login/login.js
let app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    account: '',
    password: '',
    remembered: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let password = wx.getStorageSync('password')
    if (password) {
      this.setData({
        account: password.account,
        password: password.password
      })
      if (this.data.account.length != 0 && this.data.password.length != 0) {
        this.login()
      }
    }
  },

  accountInput: function (res) {
    this.setData({
      account: res.detail.value
    })
  },

  passwordInput: function (res) {
    this.setData({
      password: res.detail.value
    })
  },

  clearAccount: function() {
    this.setData({
      account: ''
    })
  },

  clearPassword: function() {
    this.setData({
      password: ''
    })
  },

  remember: function() {
    let remembered = this.data.remembered
    this.setData({
      remembered: !remembered
    })
  },

  login: function () {
    if (this.data.account == '') {
      wx.showToast({
        title: '请输入手机号或邮箱地址',
        icon: 'none'
      })
      return;
    }
    if (this.data.password == '') {
      wx.showToast({
        title: '请输入密码',
        icon: 'none'
      })
      return;
    }
    let param = {
      account: this.data.account,
      password: this.data.password
    }
    app.post('auth/login', param).then((data) => {
      if (data.code == 0) {
        wx.setStorageSync('token', data.data.auth)
        app.globalData.userInfo = data.data
        wx.setStorageSync('password', param)
        wx.reLaunch({
          url: '../home/index',
        })
      }
    })
  }
})