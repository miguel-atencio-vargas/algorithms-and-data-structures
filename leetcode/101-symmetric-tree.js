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

  function isMirror(a, b) {
    if ((!a && b) || (a && !b)) return false;
    if (!a && !b) return true;


    return a.val == b.val
      && isMirror(a?.left, b?.right)
      && isMirror(a?.right, b?.left);
  }
  return isMirror(root.left, root.right);

};

const head = new TreeNode(0,
  new TreeNode(1, new TreeNode(2), new TreeNode(3)),
  new TreeNode(1, new TreeNode(3), new TreeNode(2))
)

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
const headD = new TreeNode(1)

const headE = new TreeNode(9,
  new TreeNode(-42, null, new TreeNode(76, null, new TreeNode(13))),
  new TreeNode(-42, new TreeNode(76, null, new TreeNode(13)), null)
)

console.log(isSymmetric(head)) // true
console.log(isSymmetric(headA)) // true
console.log(isSymmetric(headB)) // false
console.log(isSymmetric(headC)) // true
console.log(isSymmetric(headD)) // true
console.log(isSymmetric(headE)) // false

