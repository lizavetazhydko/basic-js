const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const belowZero = new Array(cols).fill(false); // boolean array to track if a position is below a zero
  let sum = 0;
  
  for (let col = 0; col < cols; col++) {
    for (let row = 0; row < rows; row++) {
      if (!belowZero[col]) { // if the current position is not below a zero
        sum += matrix[row][col]; // add the value to the sum
      }
      
      if (matrix[row][col] === 0) { // if we encounter a zero
        belowZero[col] = true; // mark all positions below the zero as below a zero
      }
    }
  }
  
  return sum;
}

module.exports = {
  getMatrixElementsSum
};
