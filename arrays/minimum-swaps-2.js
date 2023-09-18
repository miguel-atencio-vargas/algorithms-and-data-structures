// Complete the minimumSwaps function below.
function minimumSwaps(arr) {
  let swaps = 0;
  let i = 0;

  while (i < arr.length) {
      // Calculate the correct position of the current element
      const correctPosition = arr[i] - 1;

      // Check if swapping is needed
      if (i !== correctPosition) {
          // Swap the elements
          [arr[i], arr[correctPosition]] = [arr[correctPosition], arr[i]];
          swaps++;
      } else {
          // Move to the next element
          i++;
      }
  }

  return swaps;
}

const arr = [7, 1, 3, 2, 4, 5, 6];
const minimumSwapsRequired = minimumSwaps(arr);
console.log(`Minimum swaps required: ${minimumSwapsRequired}`);

