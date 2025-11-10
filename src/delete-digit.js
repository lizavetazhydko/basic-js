const { NotImplementedError } = require('../lib');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const digits = n.toString().split('');
  const numbers = [];

  for (let i = 0; i < digits.length; i++) {
    const number = digits.filter((_, j) => j !== i).join('');
    numbers.push(parseInt(number));
  }

  return Math.max(...numbers);
}

module.exports = {
  deleteDigit
};

