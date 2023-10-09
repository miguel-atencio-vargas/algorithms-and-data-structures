/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (needle === "") return 0;

  for (let i = 0; i <= haystack.length - needle.length; i++) {
    let found = true;
    for (let j = 0; j < needle.length; j++) {
      const term = needle[i + j];
      const term2 = needle[j];
      if (term !== term2) {
        found = false;
        break;
      }
    }
    if (found) return i;
  }
  return -1;
};

let c = 1;

let result = strStr("sadbutsad", "sad");
console.log(`${c++}:`, result, result === 0 ? "✅" : "🚨",);

result = strStr("leetcode", "leeto");
console.log(`${c++}:`, result, result === -1 ? "✅" : "🚨");

result = strStr("a", "a");
console.log(`${c++}:`, result, result === 0 ? "✅" : "🚨");

result = strStr("timeless", "less")
console.log(`${c++}:`, result, result === 4 ? "✅" : "🚨");
