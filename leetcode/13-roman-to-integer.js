
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const ROMAN_NUMBERS = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000,
  };

  let total = 0;

  const romans = s.split("").reverse();

  for (let i = 0; i < romans.length; i++) {
    const value = ROMAN_NUMBERS[romans[i]];
    let subTotal = 0;
    
    for (let j = i + 1; j < romans.length; j++) {
      const nextValue = ROMAN_NUMBERS[romans[j]];
      if (nextValue >= value) break;
      i++; // skip one step
      subTotal = subTotal + nextValue;
    }

    total = (total + value) - subTotal;

  }

  return total;

};


console.log("result: ", romanToInt("III")) // 3
console.log("result: ", romanToInt("LVIII")) // 58
console.log("result: ", romanToInt("IIX")) // 8
console.log("result: ", romanToInt("MCMXCIV")) // 1994