var chai = require('chai')
  , expect = chai.expect
  , sinon = require('sinon')
  , sinonChai = require('sinon-chai')
  , proxyquire = require('proxyquire');

chai.use(sinonChai);

describe('Process Number Tests', function() {
  var generator
    , numberMock;

  beforeEach(function() {
    numberMock = {
      randomNumber: sinon.stub()
    };

    generator = proxyquire('../generator', {
      './numbers.js': numberMock
    });

  });

  it('should win when name length matches random number', function() {
    numberMock.randomNumber.returns(3);
    var result = generator.nameLottery('Bob');
    expect(result).to.equal('You Win the Name Number Lottery');
  });

  it('should lose when name length does not match number', function() {
    numberMock.randomNumber.returns(4);
    var result = generator.nameLottery('Bob');
    expect(result).to.equal('Sorry, Try Again');
  });
});
