/**
 * Definition for a binary tree node.
 */

class TreeNode {
  constructor(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
  }
}
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  if (!nums.length) return;
  if (nums.length == 1) return new TreeNode(nums[0]);

  const middle = Math.floor(nums.length / 2);
  const left = nums.slice(0, middle);
  const right = nums.slice(middle + 1, nums.length);
  return new TreeNode(nums[middle], sortedArrayToBST(left), sortedArrayToBST(right));
};

sortedArrayToBST([-10, -3, 0, 5, 9])
sortedArrayToBST([1, 3])