const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result = '';
  let addition = '';
  
  if (options.hasOwnProperty('addition')) {
    addition = options.addition;
  }
  
  if (typeof addition !== 'string') {
    addition = String(addition);
  }
  
  let additionRepeatTimes = 1;
  
  if (options.hasOwnProperty('additionRepeatTimes')) {
    additionRepeatTimes = options.additionRepeatTimes;
  }
  
  let additionSeparator = '|';
  
  if (options.hasOwnProperty('additionSeparator')) {
    additionSeparator = options.additionSeparator;
  }
  
  for (let i = 1; i <= options.repeatTimes; i++) {
    result += String(str);
    
    for (let j = 1; j <= additionRepeatTimes; j++) {
      result += addition;
      
      if (j < additionRepeatTimes) {
        result += additionSeparator;
      }
    }
    
    if (i < options.repeatTimes) {
      result += options.separator || '+';
    }
  }
  
  return result;
}

module.exports = {
  repeater
};
