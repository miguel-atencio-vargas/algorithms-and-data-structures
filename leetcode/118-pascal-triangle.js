

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  numRows--;
  const matrix = [
    [1, 1],
    [1, 2]
  ];
  if (numRows == 0 || numRows == 1) return matrix;
  for (let i = numRows; i >= 0; i--) {
    for (let j = 0; j <= numRows; j++) {
      const left = i == 0 ? 1 : matrix[i][j - 1];
      const right = j == 0 ? 1 : matrix[i - 1][j];
      matrix[i][j] = left + right;
    }
  }
  console.log('⛳️ | generate | matrix:', matrix);
};

generate(5);