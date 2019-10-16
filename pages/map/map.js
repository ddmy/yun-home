Page({
  data: {
    msg: ''
  },
  onLoad: function () {
    this.setData({
      msg: 'hello world'
    })
    wx.startLocationUpdateBackground({
      success: res => {
        console.log('成功', arguments)
      },
      fail: res => {
        console.log('失败', res)
      },
      complete: res => {
        console.log('结束', res)
      }
    }),
    wx.onLocationChange(res => {
      console.log('最新位置信息', res)
    })
  }
})