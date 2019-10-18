const app = getApp()

Page({
  data: {
    msg: '',
    locations: {},
    markers: []
  },
  onLoad: function () {
    wx.startLocationUpdate({
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
    wx.getLocation({
      success: res => {
        console.log('当前位置是', res)
        this.setData({
          locations: res
        })
      }
    })
    wx.onLocationChange(res => {
      console.log('最新位置信息', res)
      console.log(app.globalData.userInfo)
      this.setData({
        markers: [{
          iconPath: app.globalData.userInfo.avatarUrl,
          name: app.globalData.userInfo.nickname,
          id: 0,
          latitude: res.latitude,
          longitude: res.longitude,
          width: 50,
          height: 50
        }]
      })
    })
  }
})