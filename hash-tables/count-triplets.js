/**
 * @link https://www.hackerrank.com/challenges/count-triplets-1/problem
 * @param {Array<Number>} arr 
 * @example [1, 4, 16, 64]
 * @param {Number} radio 
 * @example 4
 * @returns {Number}
 * @example 2
 */
function countTriplets(arr, radio) {
  const len = arr.length;
  let count = 0;

  for (let i = 0; i < len; i++) {
    let isTriplet = false;
    const a = arr[i];
    for (let j = i + 1; (j < len && !isTriplet); j++) {

      const b = arr[j];
      if (b === (a * radio)) {
        for (let k = j + 1; (k < len && !isTriplet); k++) {

          const c = arr[k];
          if (c === (b * radio)) {
            count++;
            isTriplet = count === 3;
          }
        }
      }
    }
  }
  // console.log('⛳️ | countTriplets | count:', count);
  return count;

}


function countTripletsV2(arr, radio) {
  const len = arr.length;
  const map = new Map();
  let count = 0;

  for (let i = 0; i < len; i++) map.set(i.toString(), false);

  for (let [key] of map) {
    const index = Number(key);
    for (let j = index + 1; j < len; j++) {
      if (arr[j] === arr[index] * radio) {
        map.set(`${index}${j}`, false);
      }
    }
  }

  for (let [key] of map) {
    const [a, b] = key.split("");
    if (!b) continue;

    const indexA = Number(a);
    console.log('⛳️ | countTripletsV2 | indexA:', indexA);
    const indexB = Number(b);
    console.log('⛳️ | countTripletsV2 | indexB:', indexB);

    for (let k = indexB + 1; k < len; k++) {
      console.log('⛳️ | countTripletsV2 | k:', k);
      console.log('⛳️ | countTripletsV2 | arr[k]:', arr[k]);
      console.log('⛳️ | countTripletsV2 | arr[indexB]:', arr[indexB]);

      const result = arr[indexB] * radio;
      console.log('⛳️ | countTripletsV2 | result:', result);
      if (result === arr[k]) {
        map.set(`${indexA}${indexB}${k}`, true);
      }

      console.log(`
      
      `)
    }
  }


  for (let [key, value] of map) {
    if (value) count++;
  }
  console.log('⛳️ | countTripletsV2 | map:', map);
  console.log('⛳️ | countTripletsV2 | count:', count);
  return count;
}


// countTripletsV2([1, 4, 16, 64], 4);
countTripletsV2(
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  , 100
);