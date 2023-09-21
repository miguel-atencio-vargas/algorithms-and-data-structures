// https://www.hackerrank.com/challenges/two-strings/problem

function twoStrings(s1, s2) {
  const stringMap = s1.split("").reduce((map, str) => {
    map.set(str, true);
    return map;
  }, new Map());

  for (let str of s2) {
    if (stringMap.has(str)) return "YES";
  }
  return "NO";
}


console.log(twoStrings("hello", "world"))
/*

helo

world

 */