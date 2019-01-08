// pages/work/create.js
let dateTimePicker = require('../../utils/dateTimePicker.js');
let util = require("../../utils/util.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dateStr: '',
    dateTimeArray: null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取完整的年月日 时分秒，以及默认显示的数组
    var obj = dateTimePicker.dateTimePicker(this.data.startYear, this.data.endYear);
    // 精确到分的处理，将数组的秒去掉
    var lastArray = obj.dateTimeArray.pop();
    var lastTime = obj.dateTime.pop();

    this.setData({
      dateTime: obj.dateTime,
      dateTimeArray: obj.dateTimeArray,
      dateStr: util.formatDate(new Date(), 'yyyy-MM-dd HH:mm')
    });
  },

  changeDateTime(e) {
    var dateStr = ''
    this.setData({
      dateTime: e.detail.value
    });
    for (var i = 0; i < this.data.dateTime.length; i++) {
      let index = this.data.dateTime[i]
      let arr = this.data.dateTimeArray[i]
      if (i == 0 || i == 1) {
        dateStr = dateStr + arr[index] + '-'
      } else if (i == 3) {
        dateStr = dateStr + arr[index] + ':'
      } else if (i == 2) {
        dateStr = dateStr + arr[index] + ' '
      } else {
        dateStr = dateStr + arr[index]
      }
    }
    this.setData({
      dateStr: dateStr
    })
  },

  changeDateTimeColumn(e) {
    var arr = this.data.dateTime,
      dateArr = this.data.dateTimeArray;

    arr[e.detail.column] = e.detail.value;
    dateArr[2] = dateTimePicker.getMonthDay(dateArr[0][arr[0]], dateArr[1][arr[1]]);

    this.setData({
      dateTimeArray: dateArr,
      dateTime: arr
    });
  },
})