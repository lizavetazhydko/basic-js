const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('arr parameter must be an instance of the Array!');
  }
  
  const transformedArr = [];
  let excludeNext = false;
  let duplicateNext = false;
  
  for (let i = 0; i < arr.length; i++) {
    if (excludeNext) {
      excludeNext = false;
      continue;
    }
    
    if (duplicateNext && i < arr.length - 1) {
      transformedArr.push(arr[i], arr[i+1]);
      duplicateNext = false;
      continue;
    }
    
    if (arr[i] === '--discard-next') {
      excludeNext = true;
    } else if (arr[i] === '--discard-prev') {
      if (transformedArr.length > 0) {
        transformedArr.pop();
      }
    } else if (arr[i] === '--double-next') {
      duplicateNext = true;
    } else if (arr[i] === '--double-prev') {
      if (i > 0 && arr[i-1] !== '--discard-next') {
        transformedArr.push(arr[i-1]);
      }
    } else {
      transformedArr.push(arr[i]);
    }
  }
  
  return transformedArr;
}

module.exports = {
  transform
};
