// PEDAC
// Input:
// - string and array of words
// Output:
// - array (has the anagram words)
// Rules:
// - Explicit requirements:
// - two words are anagrams of each other if they both contain the same letters
// - 'abba' & 'bbaa' == true  where 'abba' & 'abbba' == false
// - if there are no anagram words return []
// - Implicit requirements:
// -
// -
// -

// EXAMPLES/TEST CASES:
// i: 'abba' , ['aabb', 'abcd', 'bbaa', 'dada']  =>
// =>
// o:
// =>
// DATA STRUCTURES:
// ALGORYTHM:
// count the characters number in the input words and assign to an object
//  loop over input array
//    - count charaters for cuurent word
//    - compare  if current word count char and input word count char are the same
//        - convert them to array of entries and comaper its elements
//  return new array
// PSEUDOCODE:
//
function anagrams(word, words) {
  let wordCountChar = countChars(word);
  let result = [];
  words.forEach((currentWord) => {
    let currentWordCountChar = countChars(currentWord);
    if (haveSameCharAndSameCounts(wordCountChar, currentWordCountChar)) {
      result.push(currentWord);
    }
  });
  return result;
}
function countChars(w) {
  let counts = {};
  for (let index = 0; index < w.length; index++) {
    counts[w[index]] = counts[w[index]] || 0;
    counts[w[index]] += 1;
  }
  return counts;
}
function haveSameCharAndSameCounts(obj1, obj2) {
  let arr1 = Object.keys(obj1);
  let arr2 = Object.keys(obj2);
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    return arr1.every(
      (char) => arr2.includes(char) && obj1[char] === obj2[char]
    );
  }
}

console.log(anagrams("abba", ["aabb", "abcd", "bbaa", "dada"])); //=> ['aabb', 'bbaa']

console.log(anagrams("racer", ["crazer", "carer", "racar", "caers", "racer"])); //=> ['carer', 'racer']

console.log(anagrams("laser", ["lazing", "lazy", "lacer"])); //=> []
