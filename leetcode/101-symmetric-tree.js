/**
 * Definition for a binary tree TreeNode.
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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  const left = []
  const right = []
  function postorder(node, isRight) {
    if (!node) {
      return;
    };
    if ((node.left && !node.right) || !node.left && node.right) {
      left.push(true);
      right.push(true);
    }
    if (isRight) {
      right.push(node.val);
      postorder(node.right, true);
      postorder(node.left, true);
    } else {
      left.push(node.val)
      postorder(node.left);
      postorder(node.right);
    }
  }
  postorder(root.left, false)
  postorder(root.right, true)

  console.log('⛳️ | isSymmetric | left:', left);
  console.log('⛳️ | isSymmetric | right:', right);
  return JSON.stringify(right) === JSON.stringify(left);

};

const headA = new TreeNode(1,
  new TreeNode(2, new TreeNode(3), new TreeNode(4)),
  new TreeNode(2, new TreeNode(4), new TreeNode(3))
);
const headB = new TreeNode(1,
  new TreeNode(2, null, new TreeNode(3)),
  new TreeNode(2, null, new TreeNode(3))
);
const headC = new TreeNode(1,
  new TreeNode(2, null, new TreeNode(3)),
  new TreeNode(2, new TreeNode(3), null)
);

// console.log(isSymmetric(headA))
// console.log(isSymmetric(headB))
console.log(isSymmetric(headC))

