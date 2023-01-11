const factorialOfNumber = require("../factorial/index");
const ratioOfTwoNumbers = require("../ratio/index");
// console.log(factorialOfNumber);
// console.log(ratioOfTwoNumbers);

const ratioAndFactorial = function (a, b, c) {
  const res1 = factorialOfNumber(c);
  const res2 = ratioOfTwoNumbers(a, b);
  return {
    ratio: res2,
    factorial: res1,
  };
};

module.exports = ratioAndFactorial;
