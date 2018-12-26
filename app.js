//app.js
var promise = require('utils/promise.js');
App({

  globalData: {
    baseUrl: 'https://ssl.bbkoo.com/api',
    userInfo: {}
  },
  onLaunch: function () {

  },

  // 网络请求
  fetchApi(url, params, method = 'GET') {
    let methodParam = {
      method: method
    };

    let token = wx.getStorageSync('token')
    let headers = {
      'Content-Type': 'application/json',
      'api-version': '1',
      'Client-id': '12345',
      'Version': '1.0',
      'App-id': 'xcx',
      'Accept': 'application/json, text/javascript, */*',
      'auth': token
    }
    return new promise((resolve, reject) => {
      wx.request(
        Object.assign({
          url: `${this.globalData.baseUrl}/${url}`,
          data: Object.assign({}, params),
          header: headers,
          method: method,
          success: resolve,
          fail: reject
        }, methodParam)
      )
    }).then((data) => {
      return promise.resolve(data.data);
    }).then((data) => {
      return this.checkCode(data)
    }).catch((err) => {
      console.log(err);
    })
  },

  get(url, params) {
    return this.fetchApi(url, params, 'GET');
  },

  post(url, params) {
    return this.fetchApi(url, params, 'POST');
  },

  exist(val) {
    if (!!val) {
      return true
    } else {
      return false
    }
  },

  checkCode(data) {
    let that = this
    let code = data.code
    if (code == '0') {

    } else if (code == 101) {
      wx.showToast({
        title: '请前往登录页完成登录',
        icon: 'none',
        duration: 2000,
        complete: function (e) {
          setTimeout(function () {
            that.goLogin()
          }, 1500)
        }
      })
    } else {
      wx.showToast({
        title: data.msg,
        duration: 2000,
        icon: 'none'
      })
    }
    return data;
  },

  uploadImg: function (path, suc) {
    let token = wx.getStorageSync('token')
    let headers = {
      'Content-Type': 'application/json',
      'api-version': '1',
      'Client-id': '12345',
      'Version': '1.0',
      'App-id': '1',
      'Accept': 'application/json, text/javascript, */*',
      'auth': token
    }
    wx.uploadFile({
      url: `${this.globalData.baseUrl}/upload/image`,
      filePath: path,
      name: "file",
      dataType: "json",
      header: headers,
      formData: {
        path: '',
        file: 'file',
        type: 'face'
      },
      success: function (e) {
        var obj = JSON.parse(e.data);
        console.log(obj)
        if (obj.code == 0) {
          suc(obj.data);
        } else {
          wx.showModal({
            title: '提示',
            content: obj.msg,
          })
        }
      },
      fail: function () {
        wx.showToast({
          title: '上传失败',
        })
      }
    })
  },

  //封装一个打印函数
  log: function (data, title) {
    console.group(title);
    console.log(data);
    console.groupEnd(title);
  },

  //跳转到登陆页
  goLogin() {
    wx.navigateTo({
      url: '/pages/login/login',
    })
  },

  setMoney(money, count) {
    var moeny = parseFloat(money);
    money = money.toFixed(count);
    var arr = money.split(".");
    var int_str = arr[0];
    var result = "";
    for (var i = int_str.length - 1; i >= 0; i--) {
      console.log(result);
      var key = int_str.length - i;
      result = int_str[i] + result;
      if (key && !(key % 3) && i > 0) {
        result = "," + result;
      }
    }
    if (arr[1]) {
      result += "." + arr[1];
    }
    return result;
  },

  //拨打电话
  makeCall(phoneNumber) {
    wx.makePhoneCall({
      phoneNumber: phoneNumber,
    })
  },

})