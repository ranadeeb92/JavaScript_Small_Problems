// PEDAC
// UNDERSTAND THE PROBLEM:
// Questions:
// 1.
// 2.
// Input:
// - text "template"
// Output:
// - return text after plugs in a selection of randomized words
// Rules:
// - Explicit requirements:
// - randomaized words can be(nouns, verbs, adjectives, adverbs)
// - read the input text and in each line, place random words of the appropriate types into the input text
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
//  object {n* : [], v* : [], adv* : [], adj* :[]}
//  The "fox" "bites" the "dog"'s "tail".
//  'The "n*" "v*" the "n*"'s "n*"';
// ALGORYTHM:
// declare a global variable called template and initalized with text tempate (string with a spacific charater that represent blank)
// within the function
//  - declare variable calleds words and initailized with object
//     - {n* : [], v*: [], adj*: [], adv*: [] }
//     - each key represent a word type
//     - each value is an array of words from key type
// - start a loop with starting contdition equal to true
// - declare a local variable called currentText and initialized with input text value
//  - loop over words keys array
//     - search for creent key if it exist in text
//       - replace blank(key) with appropriate words from words object and reassign the new text to text
//  - End the loop when currentText and text are equal
//  - return text
// PSEUDOCODE:
//

//const template = "The _n_ _v_ the _n_'s _n_";
const template = "The _n_'s _n_";
//const template = "The _adj_'s _n_";
const template1 =
  " The _adj_ brown _n_ _adv_ \n _v_ the _adj_ yellow \n _n_, who _adv_ _v_ his \n _n_ and looks around";
const MIN_LENGTH_OF_BLANK = 3;
const MAX_LENGTH_OF_BLANK = 5;
const BLANK_PREFIX = "_";
const BLANK_SUFFIX = "_";
function madlibs(text) {
  let words = {
    _adj_: ["quick", "lazy", "sleepy", "noisy", "hungry"],
    _n_: ["fox", "dog", "head", "leg", "tail", "cat"],
    _v_: ["jumps", "lifts", "bites", "licks", "pats"],
    _adv_: ["easily", "lazily", "noisily", "excitedly"],
  };

  let blank = "";
  while (true) {
    let currentText = text;
    Object.keys(words).forEach((key) => {
      let firstIndexOfABlank = text.search(key);
      if (firstIndexOfABlank !== -1) {
        blank = key;
        text = text.replace(blank, getRandomizedWord(blank, words));
      }
    });
    if (currentText === text) break;
  }
  return text;
}

function getRandomizedWord(blank, wordsTable) {
  let arrayWords = wordsTable[blank];
  let randomIndex = Math.floor(Math.random() * arrayWords.length);
  return arrayWords[randomIndex];
}

// // using RegExp
// function madlibs(text) {
//   let words = {
//     _adj_: ["quick", "lazy", "sleepy", "noisy", "hungry"],
//     _n_: ["fox", "dog", "head", "leg", "tail", "cat"],
//     _v_: ["jumps", "lifts", "bites", "licks", "pats"],
//     _adv_: ["easily", "lazily", "noisily", "excitedly"],
//   };

//   function replaceMatch(match) {
//     return getRandomizedWord(match, words);
//   }

//   return text.replace(/_[a-z]+_/g, replaceMatch);
// }

console.log(madlibs(template));
console.log(madlibs(template1));
