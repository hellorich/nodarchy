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
  }, function (err, response, body) {

    if (err || response.statusCode !== 200) {
      return res.sendStatus(500);
    }

    res.render('index', {
      'title': 'Nodarchy',
      'description': 'A simple Node Monarchy listing.',
      'object': JSON.parse(body)
    });

  });

});

module.exports = router;
