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
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return 0;
  let maxLevel = 1;
  function calcMax(node, level) {
    if (!node) return;

    if (level > maxLevel) {
      maxLevel = level;
    }
    
    calcMax(node.left, level + 1);
    calcMax(node.right, level + 1);
  }
  calcMax(root, maxLevel);
  return maxLevel;
};

const headA = new TreeNode(3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7))
)
const headB = null

const headC = new TreeNode(1, null, new TreeNode(2))

console.log(maxDepth(headA))
console.log(maxDepth(headB))
console.log(maxDepth(headC))