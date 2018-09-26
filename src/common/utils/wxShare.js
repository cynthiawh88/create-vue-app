import wx from 'weixin-js-sdk'

const wxShare = ({ticket, success}) => {
  const {
    signature,
    appId,
    nonceStr,
    timestamp,
  } = ticket

  // 配置 JS-SDK
  wx.config({
    debug: false,
    appId,
    timestamp, // 必填，生成签名的时间戳
    nonceStr, // 必填，生成签名的随机串
    signature,// 必填，签名
    jsApiList: [ //使用js-sdk 1.4.0最新分享接口
      'onMenuShareTimeline',
      'onMenuShareAppMessage',
      'onMenuShareQQ',
      'onMenuShareQZone'
    ]
  })
  // 配置成功后执行
  wx.ready(() => {
    handleShare({
      ticket,
      success
    })

  })
}

const handleShare = ({ticket, customTitle, success}) => {
  const {
    title,
    logo,
    link,
  } = ticket


  // 微信朋友圈
  wx.onMenuShareTimeline({
    title: customTitle || title, // 分享标题
    link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
    imgUrl: logo, // 分享图标
    success: function () {
      success(true)
    }
  })

  // 微信好友
  wx.onMenuShareAppMessage({
    title: customTitle || title, // 分享标题
    desc: '', // 分享描述
    link,
    imgUrl: logo, // 分享图标
    type: 'link', // 分享类型,music、video或link，不填默认为link
    dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
    success: function () {
      success(true)
    }
  })

  // QQ好友
  wx.onMenuShareQQ({
    title: customTitle || title, // 分享标题
    desc: '', // 分享描述
    link, // 分享链接
    imgUrl: logo, // 分享图标
    success: function () {
      success(true)
    }
  })

  // QQ空间
  wx.onMenuShareQZone({
    title: customTitle || title, // 分享标题
    desc: '', // 分享描述
    link, // 分享链接
    imgUrl: logo, // 分享图标
    success: function () {
      success(true)
    }
  })
}

export { wxShare, handleShare }
