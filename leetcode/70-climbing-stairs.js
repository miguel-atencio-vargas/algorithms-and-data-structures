/**
 * @link https://leetcode.com/problems/climbing-stairs
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  function countSteps(start, end) {
    if (start > end) return 0;
    if (start === end) return 1;
    return countSteps(start + 1, n) + countSteps(start + 2, n);
  }

  return countSteps(0, n);
};

let c = 1;

let result = climbStairs(2);
console.log(`${c++}:`, result, result === 2 ? "✅" : "🚨",);

result = climbStairs(3);
console.log(`${c++}:`, result, result === 3 ? "✅" : "🚨",);

result = climbStairs(5);
console.log(`${c++}:`, result, result === 8 ? "✅" : "🚨",);
/*
n = 5; | | | | |
1°: 1 + 1 + 1 + 1 + 1 
2°: 1 + 1 + 1 + 2
3°: 1 + 1 + 2 + 1
4°: 1 + 2 + 1 + 1
5°: 2 + 1 + 1 + 1
6°: 1 + 2 + 2
7°: 2 + 2 + 1
8°: 2 + 1 + 2
*/