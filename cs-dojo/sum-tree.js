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
    if (!node) return 0;
    return node.value + sum(node.left) + sum(node.right)
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

