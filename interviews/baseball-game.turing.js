// "number" - simple addition or substraction
// "+" - add to result the sum of last two numbers
// "D" - double the first last
// "C" - invalid fist last
function calPoints(ops) {
  const stack = [];

  for (const op of ops) {
    if (op === "C") {
      stack.pop(); // Remove the last valid score
    } else if (op === "D") {
      stack.push(2 * stack[stack.length - 1]); // Double the last valid score and add to stack
    } else if (op === "+") {
      const lastValidScore = stack[stack.length - 1];
      const secondLastValidScore = stack[stack.length - 2];
      stack.push(lastValidScore + secondLastValidScore); // Sum the last two valid scores and add to stack
    } else {
      stack.push(Number(op)); // Convert the string to a number and add it to the stack
    }
  }

  // Calculate the sum of all valid scores in the stack
  return stack.reduce((acc, val) => acc + val, 0);
}

console.log(calPoints(["5", "2", "C", "D", "+"]))