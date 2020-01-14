var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  console.log(req)
  let swiperList = [
    {url: 'https://y.gtimg.cn/music/common/upload/category_area/1909028.jpg'},
    {url: 'https://y.gtimg.cn/music/common/upload/category_area/1579265.png'}
  ]
  
  let officialSheet = {
    title: '官方歌单',
    list: [
      {url: 'http://www.sschipmunk.com/assets/1.jpg', label: '华语', title: '情感平行线'},
      {url: 'http://www.sschipmunk.com/assets/2.jpg', label: '欧美', title: '火车上听点啥'},
      {url: 'http://www.sschipmunk.com/assets/3.jpg', label: '', title: '到纽约去看雪'},
      {url: 'http://www.sschipmunk.com/assets/1.jpg', label: '欧美摇滚', title: '生活要有点态度'},
    ]
  }

  let darenSheet = {
    title: '达人歌单',
    list: [
      {url: 'http://www.sschipmunk.com/assets/1.jpg', label: '华语', title: '情感平行线'},
      {url: 'http://www.sschipmunk.com/assets/2.jpg', label: '欧美', title: '火车上听点啥'},
      {url: 'http://www.sschipmunk.com/assets/3.jpg', label: '', title: '到纽约去看雪'},
      {url: 'http://www.sschipmunk.com/assets/1.jpg', label: '欧美摇滚', title: '生活要有点态度'},
    ]
  }

  let sortArea = {
    title: '分类专区',
    list: [
      {url: 'https://y.gtimg.cn/music/common/upload/category_area/1909028.jpg', text: '更快乐更专业的亲子陪伴'},
      {url: 'https://y.gtimg.cn/music/common/upload/category_area/1579265.png', text: '最美的你，都在歌声里'},
      {url: 'https://y.gtimg.cn/music/common/upload/category_area/1909028.jpg', text: '用节奏定义城市'},
      {url: 'https://y.gtimg.cn/music/common/upload/category_area/1579265.png', text: '贝多芬2020到来'},
    ]
  }

  res.send({code: 'success', obj: {swiperList, officialSheet, darenSheet, sortArea}})
});

module.exports = router;
