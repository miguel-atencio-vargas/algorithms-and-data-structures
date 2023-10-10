/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x == 0) return 0;
  
  for (let i = 1; i <= x; i++) {
    const pow = (i * i);
    if (pow === x) return i;
    if (pow > x) return i - 1;
  }
};

console.log(mySqrt(8))
console.log(mySqrt(4))
console.log(mySqrt(36))
console.log(mySqrt(0))
console.log(mySqrt(1))