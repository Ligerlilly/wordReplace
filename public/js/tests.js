var findReplace = require('./findReplace');
var expect = require('chai').expect;

describe('FindReplace', function() {
  it('should return true', function() {
    expect(findReplace()).to.eq(true);
  });
});
