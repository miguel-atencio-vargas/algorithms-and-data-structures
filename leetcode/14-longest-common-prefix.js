/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefixOld = function (strs) {
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

var longestCommonPrefix = function (strs) {
  const len = strs.length;
  const sortedStrings = strs.sort();

  const firstString = sortedStrings[0];
  const lastString = sortedStrings[len - 1];

  for (let i = 0; i < firstString.length; i++) {
    if (firstString[i] !== lastString[i]) {
      return firstString.substring(0, i);
    }
  }
  return firstString;
}


console.log("CASE 1: ", longestCommonPrefix(["flower", "flow", "flight"]) === "fl" ? "✅" : "🚨");
console.log("CASE 2: ", longestCommonPrefix(["reflower", "flow", "flight"]) === "" ? "✅" : "🚨");
console.log("CASE 3: ", longestCommonPrefix(["a"]) === "a" ? "✅" : "🚨");
console.log("CASE 4: ", longestCommonPrefix(["abab", "aba", "abc"]) === "ab" ? "✅" : "🚨");