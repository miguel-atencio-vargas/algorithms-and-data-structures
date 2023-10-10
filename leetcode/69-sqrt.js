/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  console.log('⛳️ | mySqrt | x:', x);
  if (x == 0) return 0;

  let left = 1;
  let right = x;
  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    const pow = middle * middle;
    if (pow <= x) left = middle + 1;
    else right = middle - 1;
  }
  return right;
};

console.log(mySqrt(8))
console.log(mySqrt(4))
console.log(mySqrt(36))
console.log(mySqrt(0))
console.log(mySqrt(1))