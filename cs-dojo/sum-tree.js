class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

/**
 * @param root Node
 */
const findSum = (root) => {
  function sum(node) {
    if (!node.left && !node.right) return node.value;
    if (!node.left) return sum(node.right) + node.value;
    if (!node.right) return sum(node.left) + node.value;
    const leftResult = sum(node.left);
    const rightResult = sum(node.right);
    return node.value + leftResult + rightResult
  }
  return sum(root);
};

const root = new Node(
  2, new Node(
    3, new Node(
      5), new Node(
        6)),
  new Node(4))
console.log('⛳️ ', findSum(root));

