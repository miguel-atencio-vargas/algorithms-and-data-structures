/*
 * Complete the 'arrayManipulation' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 */

function arrayManipulation(n, queries) {
  // 1. Fill the array with len of n
  const arr = Array(n).fill(0);
  // 2. Define a max value as the minumun possible
  let max = -1;
  // 3. Read the queries and add the range of a  to b with K
  queries.forEach((row) => {
    const [i, j, k] = row;
    for (let index = i - 1; index < j; index++) {
      const value = arr[index] + k;
      arr[index] = value;
      if (value > max) max = value;
    }
    console.log({
      arr,
      max
    });
  });


  return max;
}


// arrayManipulation(10, [
//   [1, 5, 3],
//   [4, 8, 7],
//   [6, 9, 1]
// ])
arrayManipulation(10, [
  [2, 6, 8],
  [3, 5, 7],
  [1, 8, 1],
  [5, 9, 15]
])
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// [0, 8, 8, 8, 8, 8, 0, 0, 0, 0] // 2, 6, 8
// [0, 8, 15, 15, 15, 8, 0, 0, 0, 0] // 3, 5, 7
// [1, 9, 16, 16, 16, 9, 1, 1, 0, 0] // 1, 8, 1
// [1, 9, 16, 16, 31, 24, 16, 16, 15, 0] // 5, 9, 15