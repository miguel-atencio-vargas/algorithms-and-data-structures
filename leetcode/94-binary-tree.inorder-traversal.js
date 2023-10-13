/**
 * Definition for a binary tree node.

 */

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}


/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const result = [];
  function get(node) {
    if (!node || (!node.left && !node.right)) return;
    if (!node.left) {
      result.push(node.val)
      return get(node.right)
    }
    if (!node.right) {
      result.push(node.val)
      return get(node.left)
    }
    result.push(node.val)
    get(node.left);
    get(node.right);
  }
  get(root);
  return result;
};

const root = TreeNode(1, null, new TreeNode(2, new TreeNode(3)));
console.log('⛳️ ', inorderTraversal(root));
