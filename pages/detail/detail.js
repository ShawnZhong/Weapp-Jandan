var API = require('../../utils/api.js');
Page({
  data: {
    author:"",
    text:[],
    pics:[],
    hot_tucao: [],
    tucao: []
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad(options) {
    let that = this;

    wx.getStorage({
      key: 'item',
      success: function (res) {
        that.setData({
          id:res.data.comment_ID,
          author:res.data.comment_author,
          text:res.data.text_content,
          pics:res.data.pics
        })
      }
    })

    wx.request({
      url: API.getTucaoURL(options.id),
      success(res) {
        that.setData({
          hot_tucao: res.data.hot_tucao,
          tucao: res.data.tucao
        })
      }
    });
  },getComment:function(){
    
  },
  vote: function (event) {
    let that = this;
    wx.request({
      url: API.getVoteURL(),
      method: 'POST',
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      data: {
        comment_id: event.target.dataset.postid,
        like_type: event.target.dataset.vote,
        data_type: 'comment'
      },
      success(res) {
        if (res.data.error == 0) {
          wx.showToast({ title: '投票成功' });
        } else {
          wx.showToast({ title: '已经投过票', icon: 'loading' });
        }
      }
    })
  }
})
