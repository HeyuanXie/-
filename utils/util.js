const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function formatNum(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}


function formatDate(date, format) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  if (format == "yyyy-MM-dd HH:mm:ss") {
    return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')
  } else if (format == "yyyy-MM-dd HH:mm") {
    return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute].map(formatNumber).join(':')
  } else if (format == "yyyy-MM-dd") {
    let time = [year, month, day].map(formatNumber).join('-')
    return time
  } else if (format == "yyyy年MM月dd日") {
    strYear = year.toString()[1] ? year.toString() : '0' + year.toString
    strMonth = month.toString()[1] ? month.toString() : '0' + month.toString
    strDay = day.toString()[1] ? day.toString() : '0' + day.toString
    return strYear + "年" + strMonth + "月" + strDay + "日"
  } else if (format == "yyyy-MM") {
    let time = [year, month].map(formatNumber).join('-')
    return time
  }
}

function getNowTime(day) {
  var now = new Date();
  now.setDate(now.getDate() + day)
  var year = now.getFullYear();
  var month = now.getMonth() + 1;
  var day = now.getDate();
  if (month < 10) {
    month = '0' + month;
  };
  if (day < 10) {
    day = '0' + day;
  };
  //  如果需要时分秒，就放开
  // var h = now.getHours();
  // var m = now.getMinutes();
  // var s = now.getSeconds();
  var formatDate = year + '-' + month + '-' + day;
  return formatDate;
}

// 正则表达式
function isPhoneNumber(str) {
  var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
  if (!myreg.test(str)) {
    return false;
  } else {
    return true;
  }
}

module.exports = {
  formatTime: formatTime,
  formatDate: formatDate,
  isPhoneNumber: isPhoneNumber,
  getNowTime: getNowTime,
}