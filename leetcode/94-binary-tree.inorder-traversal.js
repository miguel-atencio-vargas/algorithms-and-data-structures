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
var traversal = function (root) {
  const resultInorder = [];
  const resultPreorder = [];
  const resultPostorder = [];

  function inorder(node) {
    if (!node) return;
    inorder(node.left);
    resultInorder.push(node.val);
    inorder(node.right);
  }

  function preorder(node) {
    if (!node) return;
    resultPreorder.push(node.val);
    preorder(node.left);
    preorder(node.right);
  }

  function postorder(node) {
    if (!node) return;
    postorder(node.left);
    postorder(node.right);
    resultPostorder.push(node.val);
  }

  inorder(root);  // [4, 2, 5, 1, 3]
  preorder(root); // [1, 2, 4, 5, 3]
  postorder(root); //[4, 5, 2, 3, 1]


  console.log('⛳️ | traversal | resultInorder:', resultInorder);
  console.log('⛳️ | traversal | resultPreorder:', resultPreorder);
  console.log('⛳️ | traversal | resultPostorder:', resultPostorder);

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

const root = TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3));
traversal(root);
