/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  const len = strs.length;
  const map = new Map();
  
  for (let word of strs) {
    for (let i = 0; i < word.length; i++) {
      const subStr = word.substring(0, word.length - i);
      let count = map.get(subStr) || 0;
      map.set(subStr, ++count);
      if (count === len) return subStr;
    }
  }


};


const strings = ["cir","car"];
const result = longestCommonPrefix(strings);

console.log('⛳️ | result:', result);
console.log('⛳️ | pass: ', result === "c" ? "✅" : "🚨");
