// in : string
// out : obj
// rules:
// - exclude non-letters from word size

function wordSizes(str) {
  let obj = {};
  if (str.length === 0) return obj;
  let words = str.split(" ");
  for (let index = 0; index < words.length; index++) {
    let word_size = getLength(words[index]);
    obj[word_size] = obj[word_size] || 0;
    obj[word_size] += 1;
  }
  return obj;
}

function getLength(word) {
  word = word.replace(/[^A-Za-z0-9]/g, "");
  return word.length;
}

console.log(wordSizes("Four score and seven.")); // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes("Hey diddle diddle, the cat and the fiddle!")); // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?")); // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes(""));
