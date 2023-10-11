/**
 * @link https://leetcode.com/problems/climbing-stairs
 * @param {number} n
 * @return {number}
 */
var climbStairsOld = function (n) {
  function countSteps(start, end) {
    if (start > end) return 0;
    if (start === end) return 1;
    return countSteps(start + 1, n) + countSteps(start + 2, n);
  }

  return countSteps(0, n);
};

var climbStairs = function (n) {
  const map = new Map();
  function countSteps(start, end) {
    if(map.has(start)) return map.get(start);
    if (start > end) return 0;
    if (start === end) return 1;
    const oneStep = countSteps(start + 1, n);
    const twoSteps = countSteps(start + 2, n);
    map.set(start + 1, oneStep);
    map.set(start + 2, twoSteps);
    return oneStep + twoSteps;
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

result = climbStairs(22);
console.log(`${c++}:`, result, result === 28657 ? "✅" : "🚨",);

result = climbStairs(41);
console.log(`${c++}:`, result, result === 267914296 ? "✅" : "🚨",);
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