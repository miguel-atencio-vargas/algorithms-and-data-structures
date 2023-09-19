/**
 * 
 * @param {Array<string>} magazine 
 * @param {Array<string>} note 
 */
function checkMagazine(magazine, note) {
  const existingWords = magazine.reduce((map, word) => {
    const count = map.get(word);
    if (!count) map.set(word, 1);
    else map.set(word, count + 1);
    return map;
  }, new Map());
  for (let word of note) {
    const count = existingWords.get(word);
    if (count > 0) {
      existingWords.set(word, count - 1);
    } else {
      console.log("No")
      return;
    }
  }
  console.log("Yes");
}

checkMagazine(
  ["give", "me", "one", "grand", "today", "night"],
  ["give", "give", "one", "grand", "today"]
);