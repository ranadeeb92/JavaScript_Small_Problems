// PEDAC
// Input:
// - string of (text)
// Output:
// - array (of top-3 most occurring words in descending oreder(depends on number of ocuurenc))
// Rules:
// - Explicit requirements:
// - word is astring of letter(a-z), optionally contains one or more "'"
// - matches is case-sensitives , words iin the result is lowercases
// - if text contains < three unique words => [top-2 ]or [top-1] 0r []
// - Implicit requirements:
// -
// -
// -

// EXAMPLES/TEST CASES:
// i:
// =>
// o:
// =>
// DATA STRUCTURES:
// ALGORYTHM:
// convert input string to an array of words
// loop over the array words and pick just the words contains alphabet
// if array words length greater than 3 => return words
// else
//   - loop over the words array and count how many times each word occur in the array

// PSEUDOCODE:
//

function topThreeWords(text) {
  let regExp = /[a-z]+/i;
  let words = text.trim().split(" ");
  words = words
    .filter((word) => regExp.test(word))
    .map((word) => word.toLowerCase().replace(/[^a-z']/g, ""));

  let counts = {};
  words.forEach((word) => {
    //       if(!Object.keys(counts).includes(word)){
    //         counts[word] = count(word, words);
    //     }
    counts[word] = counts[word] || 0;
    counts[word] += 1;
  });
  // console.log(counts);
  //   return Object.keys(counts).length < 3 ? getTop(counts, 2) : getTop(counts, 3);
  return getTop(counts, 3);
}

// function count(str, array){
//   let count = 0;
//   for(let index = 0; index < array.length; index++){
//     if(str === array[index]){
//       count += 1;
//     }
//   }
//   return count;
// }

function maxOcurre(wordsCounts) {
  //   return Object.keys(wordsCounts).reduce((max, word) => {
  //     if(wordsCounts[word] > max[0]){
  //       max = [wordsCounts[word], word]
  //     }
  //     return max;
  //   }, [0, '']);
  let max = 0;
  let word = "";
  let words = Object.keys(wordsCounts);
  for (let index = 0; index < words.length; index++) {
    if (wordsCounts[words[index]] > max) {
      max = wordsCounts[words[index]];
      word = words[index];
    }
  }
  return word;
}

function getTop(wordsCounts, n) {
  let topArray = [];
  while (topArray.length < n) {
    if (Object.keys(wordsCounts).length === 0) break;
    topArray.push(maxOcurre(wordsCounts));
    delete wordsCounts[maxOcurre(wordsCounts)];
  }
  // console.log(topArray);
  return topArray;
}

// function makeOver(arrayOfWords){
//   for(let index = 0; index < arrayOfWords.length; index++){
//     arrayOfWords[index] = arrayOfWords[index].replace(/[^a-z']/g,"");
//   }
// //  console.log(arrayOfWords);
//   return arrayOfWords;
// }
console.log(topThreeWords("a a a  b  c c  d d d d  e e e e e"), [
  "e",
  "d",
  "a",
]);

console.log(topThreeWords("a a c b b"), ["a", "b", "c"]);

console.log(
  topThreeWords("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e"),
  ["e", "ddd", "aa"]
);

console.log(topThreeWords("  //wont won't won't "), ["won't", "wont"]);

console.log(topThreeWords("  , e   .. "), ["e"]);

console.log(topThreeWords("  ...  "), []);

console.log(topThreeWords("  '  "), []);

console.log(
  topThreeWords(`In a village of La Mancha, the name of which I have no desire to call to
mind, there lived not long since one of those gentlemen that keep a lance
in the lance-rack, an old buckler, a lean hack, and a greyhound for
coursing. An olla of rather more beef than mutton, a salad on most
nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
on Sundays, made away with three-quarters of his income.`),
  ["a", "of", "on"]
);
