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
  console.log('⛳️ | longestCommonPrefix | strs:', strs);
  console.log('⛳️ | longestCommonPrefix | sortedStrings:', sortedStrings);

  const firstString = sortedStrings[0];
  console.log('⛳️ | longestCommonPrefix | firstString:', firstString);
  const lastString = sortedStrings[len - 1];
  console.log('⛳️ | longestCommonPrefix | lastString:', lastString);



  for (let i = 0; i < firstString.length; i++) {
    const subStr = firstString.substring(0, firstString.length - i);

    if (lastString.substring(0, subStr.length) == subStr) {
      console.log('⛳️ | longestCommonPrefix | subStr:', subStr);
      return subStr;
    }
  }
  return "";
}


console.log("CASE 1: ", longestCommonPrefix(["flower", "flow", "flight"]) === "fl" ? "✅" : "🚨");
console.log("CASE 2: ", longestCommonPrefix(["reflower", "flow", "flight"]) === "" ? "✅" : "🚨");
console.log("CASE 3: ", longestCommonPrefix(["carman", "ca", "car"]) === "ca" ? "✅" : "🚨");
console.log("CASE 4: ", longestCommonPrefix(["abab", "aba", "abc"]) === "ab" ? "✅" : "🚨");