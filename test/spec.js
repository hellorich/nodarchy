let expect  = require('chai').expect;
let request = require('request');

describe('Load Express server', function () {
  it('Server status is 200', function() {
    request('http://localhost:3000' , function(error, response, body) {
    	expect(response.statusCode).to.equal(200);
    });
  });
});
