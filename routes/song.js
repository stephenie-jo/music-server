var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  console.log(req.body)

  let Vo = req.body
  if (Vo && Vo.code) {
    let url = 'http://www.sschipmunk.com/assets/3.jpg'
    res.send({
      code: 'success', 
      obj: {url}
    })
  }
})

module.exports = router
