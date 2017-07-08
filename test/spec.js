let expect  = require('chai').expect;
let request = require('request');

describe('Test Express server runs', function () {
  it('Server status is 200', function() {
    request('http://localhost:3000' , function(error, response, body) {
    	expect(response.statusCode).to.equal(200);
    });
  });
});

describe('Test JSON source exists', function () {
  it('Server status is 200', function() {
    request({
      uri: 'http://mysafeinfo.com/api/data',
      qs: {
        list: 'englishmonarchs',
        format: 'json'
      }, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
      }
    });
  });
});
