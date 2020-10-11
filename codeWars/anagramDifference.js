// Given two words, how many letters do you have to remove from them to make them anagrams?
// Example
// First word : c od e w ar s (4 letters removed)
// Second word : ha c k er r a nk (6 letters removed)
// Result : 10
// Hints
// A word is an anagram of another word if they have the same letters (usually in a different order).
// Do not worry about case. All inputs will be lowercase.
// When you're done with this kata, check out its big brother/sister : https://www.codewars.com/kata/hardcore-anagram-difference

console.log(anagramDifference("", "")); //,0);
console.log(anagramDifference("a", "")); //,1);
console.log(anagramDifference("", "a")); //,1);
console.log(anagramDifference("ab", "a")); //,1);
console.log(anagramDifference("ab", "cd")); //,4);
console.log(anagramDifference("aab", "a")); //,2);
console.log(anagramDifference("a", "aab")); //,2);
console.log(anagramDifference("codewars", "hackerrank")); //,10);

// PEDAC
// Input:
// - two strings(two words)
// Output:
// - number (how many letters we remove to make the iput words anagram)
// Rules:
// - Explicit requirements:
// -  A word is an anagram of another word if they have the same letters
// - Implicit requirements:
// - if both words are empty string => return 0
// - if one of input words is empty => return the length of the other word
// -

// EXAMPLES/TEST CASES:
// i: aab , a
// =>
// o:
// =>
// DATA STRUCTURES:
// ALGORYTHM:
// counts letters in each word
// decaler a varaiable called times and initalized with 0
// loop over word1 letter counts obj
//    - if current char is not exist in word2
//        - times increment by how many times this char occur in this word
//    - else
//        - check if current char count greater than the count of words char
//          - times increment by difference between word1count and word2count
// repeat th loop on word2 letter counts
// return times
// PSEUDOCODE:
//

// function anagramDifference(word1, word2) {
//   if (word1.length === 0 && word2.length === 0) return 0;
//   if (word1.length === 0) {
//     return word2.length;
//   } else if (word2.length === 0) {
//     return word1.length;
//   } else {
//     let arr1 = word1.split("");
//     let arr2 = word2.split("");

//     arr1 = arr1.filter((char) => {
//       return arr1.includes(char) && arr2.includes(char);
//     });

//     arr2 = arr2.filter((char) => {
//       return arr1.includes(char) && arr2.includes(char);
//     });

//     let countCharArr1 = count(arr1);
//     let countCharArr2 = count(arr2);

//     Object.keys(countCharArr1).forEach((key) => {
//       if (countCharArr1[key] > countCharArr2[key]) {
//         countCharArr1[key] = countCharArr2[key];
//       } else if (countCharArr1[key] < countCharArr2[key]) {
//         countCharArr2[key] = countCharArr1[key];
//       }
//     });

//     let w1 = Object.keys(countCharArr1).join("");
//     let w2 = Object.keys(countCharArr2).join("");

//     let times = 0;
//     if (word1 !== w1) {
//       times += word1.length - w1.length;
//     }
//     if (word2 !== w2) {
//       times += word2.length - w2.length;
//     }

//     return times;
//   }
// }

function anagramDifference(word1, word2) {
  let word1CountChar = count(word1);
  let word2CountChar = count(word2);

  let times = countMissingChars(word1CountChar, word2CountChar);
  times += countMissingChars(word2CountChar, word1CountChar);

  return times;
}

function countMissingChars(obj1, obj2) {
  return Object.keys(obj1).reduce((times, char) => {
    if (!obj2[char]) {
      return (times += obj1[char]);
    } else if (obj1[char] > obj2[char]) {
      return (times += obj1[char] - obj2[char]);
    } else {
      return times;
    }
  }, 0);
}

function count(str) {
  let counts = {};
  for (let char = 0; char < str.length; char++) {
    counts[str[char]] = counts[str[char]] || 0;
    counts[str[char]] += 1;
  }
  return counts;
}
