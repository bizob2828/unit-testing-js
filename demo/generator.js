var numbers = require('./numbers.js');


module.exports.nameLottery = function nameLottery(name) {
  var number = numbers.randomNumber(0, 100);
  if(name.length === number) {
    return 'You Win the Name Number Lottery';
  }

  return 'Sorry, Try Again';
};

