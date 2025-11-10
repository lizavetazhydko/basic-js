const { NotImplementedError } = require('../lib');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  const charCount1 = new Map();
  const charCount2 = new Map();

  for (const char of s1) {
    charCount1.set(char, (charCount1.get(char) || 0) + 1);
  }

  for (const char of s2) {
    charCount2.set(char, (charCount2.get(char) || 0) + 1);
  }

  let commonCount = 0;

  for (const char of s1) {
    const count1 = charCount1.get(char) || 0;
    const count2 = charCount2.get(char) || 0;

    if (count2 > 0) {
      commonCount++;
      charCount2.set(char, count2 - 1);
    }

    if (count1 > 0) {
      charCount1.set(char, count1 - 1);
    }
  }

  return commonCount;
}

module.exports = {
  getCommonCharacterCount
};
