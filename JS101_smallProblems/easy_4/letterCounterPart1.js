// in : a string
// out : object
//rules:
// - input string consisting of zero or more spaces separted words
// words consist of any sequance of non-space character
// - return obj : shows the number of words (value) of different sizes (key)
// empty strin => empty obj

// algo:
// - convert the input string to an array
// - each element in this array should be a word
// - build a an obj from the array
//    - loop over the array
//    - get each word length
//    - each key_value in obj = word size and number of words that has the key length
// - return the obj

// function wordSizes(str) {
//   let obj = {};
//   if (str.length > 0) {
//     let words = str.split(" ");
//     for (let index = 0; index < words.length; index++) {
//       let word_size = words[index].length;
//       if (Object.keys(obj).includes(String(word_size))) {
//         obj[word_size] += 1;
//       } else {
//         obj[word_size] = 1;
//       }
//     }
//   }
//   return obj;
// }

// another solution
function wordSizes(str) {
  let obj = {};
  if (str.length === 0) return obj;
  let words_len = str.split(" ").map((word) => word.length);
  words_len.forEach((len) => {
    if (Object.keys(obj).includes(String(len))) {
      obj[len] += 1;
    } else {
      obj[len] = 1;
    }
  });

  return obj;
}
console.log(wordSizes("Four score and seven.")); // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes("Hey diddle diddle, the cat and the fiddle!")); // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?")); // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(""));
