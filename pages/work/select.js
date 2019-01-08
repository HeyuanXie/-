// pages/work/select.js

/**
 * 通用选择列表
 */
Page({

  /**
   * 页面的初始数据
   */
  data: {
    contentType: 0, //0-选择提醒时间，1-选择业务类型，2-选择所在市场
    dataArray: [],
    selectArray: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    if (options.contentType != null) {
      this.setData({
        contentType: options.contentType
      })
    }
    this.fetchData()
    this.configSelectedItem(this.data.dataArray)
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

  fetchData: function() {
    if (this.data.contentType == 0) {
      this.setData({
        dataArray: [{
            id: 0,
            title: '不提醒'
          },
          {
            id: 1,
            title: '工作开始时'
          },
          {
            id: 2,
            title: '提前5分钟'
          },
          {
            id: 3,
            title: '提前15分钟'
          },
          {
            id: 4,
            title: '提前20分钟'
          },
          {
            id: 5,
            title: '提前1小时'
          },
          {
            id: 6,
            title: '提前1天'
          }
        ]
      })
    } else if (this.data.contentType == 1) {
      this.setData({
        dataArray: [{
            id: 0,
            title: '自营'
          },
          {
            id: 1,
            title: '代卖'
          },
          {
            id: 2,
            title: '货主'
          },
          {
            id: 3,
            title: '其他类型'
          }
        ]
      })
    } else if (this.data.contentType == 2) {
      this.setData({
        dataArray: [{
          id: 0,
          title: '嘉兴水果批发市场'
        },
        {
          id: 1,
          title: '广州江南市场'
        },
        {
          id: 2,
          title: '东莞下桥水果批发市场'
        }
        ]
      })
    }
  },

  configSelectedItem: function (arr) {
    for (var i = 0; i < arr.length; i++) {
      let item = arr[i]
      for (var j = 0; j < this.data.selectArray.length; j++) {
        let temp = this.data.selectArray[j]
        if (item.id == temp.id) {
          item.selected = true
          break
        }
      }
    }
  },

  selectItem: function (res) {
    let dataArray = this.data.dataArray
    let index = res.currentTarget.dataset.index
    let item = dataArray[index]
    item.selected = !item.selected
    let selectArray = []
    if (this.data.contentType == 0) {
      //单选
      
    }else{
      for (var i = 0; i < dataArray.length; i++) {
        let temp = dataArray[i]
        if (temp.selected == true) {
          selectArray.push(temp)
        }
      }
      this.setData({
        dataArray: dataArray,
        selectArray: selectArray
      })
    }
  },

  commit: function() {
    //多选保存返回

  }
})