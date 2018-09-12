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



// 成功与普通提示
let showSuccess = text => wx.showToast({
  title: text,
  icon: 'success'
})

let showInfo = text => wx.showToast({
  title: text,
  icon: 'none'
})

module.exports = {
  formatTime,
  showSuccess,
  showInfo
}
