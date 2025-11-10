const { NotImplementedError } = require('../lib');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }

    const m = message.toUpperCase();
    const k = key.toUpperCase();
    let result = '';
    let j = 0; // index for key

    for (let i = 0; i < m.length; i++) {
      const charCode = m.charCodeAt(i);

      if (charCode >= 65 && charCode <= 90) { // A-Z
        const keyCharCode = k.charCodeAt(j % k.length) - 65;
        const encryptedChar = String.fromCharCode(((charCode - 65 + keyCharCode) % 26) + 65);
        result += encryptedChar;
        j++;
      } else {
        result += m[i];
      }
    }

    return this.isDirect ? result : result.split('').reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }

    const em = encryptedMessage.toUpperCase();
    const k = key.toUpperCase();
    let result = '';
    let j = 0; // index for key

    for (let i = 0; i < em.length; i++) {
      const charCode = em.charCodeAt(i);

      if (charCode >= 65 && charCode <= 90) { // A-Z
        const keyCharCode = k.charCodeAt(j % k.length) - 65;
        const decryptedChar = String.fromCharCode(((charCode - 65 - keyCharCode + 26) % 26) + 65);
        result += decryptedChar;
        j++;
      } else {
        result += em[i];
      }
    }

    return this.isDirect ? result : result.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
