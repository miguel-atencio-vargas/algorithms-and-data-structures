/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  if (digits[digits.length - 1] === 9) {
    if (digits.length > 1) {
      return [...plusOne(digits.slice(0, -1)), 0];
    } else {
      return [...plusOne(digits.slice(0, -1)), 1, 0];
    }
  } else {
    digits[digits.length - 1] = digits[digits.length - 1] + 1;
    return digits;
  }
};
let c = 1;

let result = plusOne([1, 9, 9, 9]);
console.log(`${c++}:`, result);
result = plusOne([9]);
console.log(`${c++}:`, result);