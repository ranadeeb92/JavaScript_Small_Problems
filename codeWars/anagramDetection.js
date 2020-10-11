// PEDAC
// Input:
// -two strings
// Output:
// -boolean
// Rules:
// - Explicit requirements:
// - An anagram is the result of rearranging the letters of a word to produce a new word
// - anagram are case insensitive
// - check if these two strings are anagarm to each other
// - Implicit requirements:
// -
// -
// -

// EXAMPLES/TEST CASES:
// i: foefet , toffee  => rearrange foefet to preduce toffee
// => all w2 letters in w1 and both has the same counts number for this letters
// => return true
// o:
// =>
// DATA STRUCTURES:
// ALGORYTHM:
// count letters in word1 and word2 and assigne the result to two objects
// check if these words have the same length
//   - check if they have the same characters and the same count for each charater => return true
//   - else  => return false
// else => return false
// PSEUDOCODE:
//

var isAnagram = function (test, original) {
  test = test.toLowerCase();
  original = original.toLowerCase();

  if (test.length === original.length) {
    let testCountLetters = countChars(test);
    let originalCountLetter = countChars(original);

    return haveSameCharAndSameCounts(testCountLetters, originalCountLetter);
  }
  return false;
};

function haveSameCharAndSameCounts(obj1, obj2) {
  return Object.keys(obj1).every((char) => {
    return obj2[char] && obj1[char] === obj2[char];
  });
}

function countChars(word) {
  let counts = {};
  for (let index = 0; index < word.length; index++) {
    counts[word[index]] = counts[word[index]] || 0;
    counts[word[index]] += 1;
  }
  return counts;
}

console.log(
  isAnagram("foefet", "toffee"),
  true,
  "The word foefet is an anagram of toffee"
);
console.log(
  isAnagram("Buckethead", "DeathCubeK"),
  true,
  "The word Buckethead is an anagram of DeathCubeK"
);
console.log(
  isAnagram("Twoo", "WooT"),
  true,
  "The word Twoo is an anagram of WooT"
);

console.log(
  isAnagram("dumble", "bumble"),
  false,
  "Characters do not match for test case dumble, bumble"
);
console.log(
  isAnagram("ound", "round"),
  false,
  "Missing characters for test case ound, round"
);
console.log(
  isAnagram("apple", "pale"),
  false,
  "Same letters, but different count"
);
