
/**
 * @param {string} s
 * @return {boolean}
 */
var isValidOld = function (s) {
  const stack = [];

  for (let char of s) {
    if (char == "(" || char == "{" || char == "[") {
      stack.push(char);
    } else {
      const last = stack[Math.max(stack.length - 1, 0)];
      let pop = false;
      if (last == "(" && char == ")") pop = true;
      if (last == "{" && char == "}") pop = true;
      if (last == "[" && char == "]") pop = true;

      if (pop) stack.pop();
      else return false;
    }
  };
  return s.length > 1 && stack.length == 0;
};


var isValid = function (s) {
  const stack = [];
  for (let char of s) {
    if (char == "(") {
      stack.push(")");
    } else if (char == "{") {
      stack.push("}");
    } else if (char == "[") {
      stack.push("]");
    } else if (stack.length == 0 || stack.pop() != char) {
      return false
    }
  }

  return s.length > 1 && stack.length == 0;
}

let c = 1;

let result = isValid("()");
console.log(`${c++}:`, result, result === true ? "✅" : "🚨",);

result = isValid("()[]{}");
console.log(`${c++}:`, result, result === true ? "✅" : "🚨");

result = isValid("(]");
console.log(`${c++}:`, result, result === false ? "✅" : "🚨");

result = isValid("")
console.log(`${c++}:`, result, result === false ? "✅" : "🚨");

result = isValid("(({}))")
console.log(`${c++}:`, result, result === true ? "✅" : "🚨");

result = isValid("((")
console.log(`${c++}:`, result, result === false ? "✅" : "🚨");