var chai = require('chai')
  , expect = chai.expect
  , sinon = require('sinon')
  , num = require('../numbers')
  , sinonChai = require('sinon-chai');

chai.use(sinonChai);

describe('Process Number Tests', function() {

  beforeEach(function() {
    Math.random = sinon.stub();

  });

  it('should win when name length matches random number', function() {
    Math.random.returns(5);
    var number = num.randomNumber(1, 3);
    expect(number).to.equal(16);
  });

});
