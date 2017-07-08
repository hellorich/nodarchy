let express = require('express');
let router = express.Router();
let request = require('request');

router.get('/', function(req, res, next) {
  request({
    uri: 'http://mysafeinfo.com/api/data',
    qs: {
      list: 'englishmonarchs',
      format: 'json'
    }
  }).pipe(res);
});

module.exports = router;
