var findReplace = require('./findReplace');
var expect = require('chai').expect;

describe('FindReplace', function() {
  it("should return 'hello universe' if passed (hello world, world, universe)" , function() {
    expect(findReplace("hello world", "world", "universe")).to.eq('hello universe');
  });

  it("should return 'hi hi hi hi' if passed (there there there there, there, hi)", function() {
    expect(findReplace('there there there there', 'there', 'hi')).to.eq('hi hi hi hi');
  });

  it('should return no match if there is no match', function() {
    expect(findReplace('try this', 'haha', 'noway')).to.eq('no match')
  });
});
