/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSumOld = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const a = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      const b = nums[j];
      if ((a + b) == target) {
        return [i, j];
      }
    }
  }
};


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = nums.reduce((acc, value, i) => {
    acc.set(value, i);
    return acc;
  }, new Map());

  for (let j = 0; j < nums.length; j++) {
    const complement = target - nums[j];
    const index = map.get(complement);
    if (index && index != j) {
      return [j, index];
    }
  }
}


console.log(twoSum([2, 11, 15, 7], 9))
// console.log(twoSum([3, 3], 6))