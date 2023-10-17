/**
 * Definition for a binary tree node.

 */

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
  return this;
}


/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const result = [];
  
  function inorder(node) {
    if (!node) return;
    inorder(node.left);
    result.push(node.val); // the order its important (left + node + right)
    inorder(node.right);
  }

  inorder(root);
  return result;
};

/**
 * Iterative approach using stack
 * @param {*} root 
 */
var inorderTraversal2 = function (root) {
  const stack = [];
  const result = [];
  let curr = root;
  while (curr || stack.length) {
    // go left as possible
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }
    // when current points to null we reached the bottom of the tree,
    // pop up the top of the stack and add it to the result
    curr = stack.pop();
    result.push(curr.val);
    curr = curr.right; // update current to right node, loops repeat again
  }
}

const root = TreeNode(1, null, new TreeNode(2, new TreeNode(3)));
// [1,3,2]
console.log('⛳️ ', inorderTraversal(root));
