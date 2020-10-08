// PEDAC
// Input:
// - string (string of words sperated by spaces)
// Output:
// - string
// Rules:
// - Explicit requirements:
// - first  and last letter remain in original place for each word
// - characters between first and last characters (sort the  alpabetically)
// - punctuation , spaces remain at the same place
// - ignore capitalization
// - Implicit requirements:
// - word of single character => return it as it
// - word of three charaters => return it as ir
// - special character do not take a place of non-spacial character "-dbaa" => "-daba" , watching, => wachintg,
// -

// EXAMPLES/TEST CASES:
// i:
// =>
// o:
// =>
// DATA STRUCTURES:   array
// ALGORYTHM:
// if input string length is 1 or 2 or 3=> return input string as it
// covert input string to an array of words
// loop over array of words
//    - for each word
//     - build a new word from this word
//        - get firstPart of the new word
//        - get lastPart of the new word
//        - get the middle part of the new word
//    - add this new word to a new array called result
// convert result to string
// return the string
// PSEUDOCODE:
//

ScrambleWords = function (str) {
  if (str.length <= 3) return str;
  let words = str.split(" ");
  return words.map((word) => getNewWord(word.toLowerCase())).join(" ");
};

function getNewWord(w) {
  let startIndexOfMiddlePart = getStartIndex(w);
  let endIndexOfMiddlePart = getLastIndex(w);
  if (startIndexOfMiddlePart === endIndexOfMiddlePart) return w;

  let firstPart = w.slice(0, startIndexOfMiddlePart);
  let lastPart = w.slice(endIndexOfMiddlePart);
  let middlePart = replacer(
    w.slice(startIndexOfMiddlePart, endIndexOfMiddlePart)
  );

  function replacer(mid) {
    let letterArr = [];
    for (let index = 0; index < mid.length; index++) {
      if (isLetter(mid[index])) {
        letterArr.push(mid[index]);
      }
    }
    letterArr.sort();
    let j = 0;
    let newWord = "";
    for (let index = 0; index < mid.length; index++) {
      if (isLetter(mid[index])) {
        newWord += letterArr[j];
        j++;
      } else {
        newWord += mid[index];
      }
    }
    return newWord;
  }

  return firstPart + middlePart + lastPart;
}

function getStartIndex(word) {
  for (let index = 0; index < word.length; index++) {
    if (isLetter(word[index])) {
      return index + 1;
    }
  }
}
function getLastIndex(word) {
  for (let index = word.length - 1; index >= 0; index--) {
    if (isLetter(word[index])) {
      return index;
    }
  }
}
function isLetter(char) {
  return char >= "a" && char <= "z";
}

console.log(
  ScrambleWords("professionals") === "paefilnoorsss",
  "The first and last letters of a word should reamin in place with the inner letters sorted"
);
console.log(ScrambleWords("i") === "i", "Must handle single charater words");
console.log(ScrambleWords("me") === "me", "Must handle 2 charater words");
console.log(ScrambleWords("you") === "you", "Must handle 3 charater words");
console.log(
  ScrambleWords("card-carrying") === "caac-dinrrryg",
  "Only spaces separate words and punctuation should remain at the same place as it started"
);
console.log(
  ScrambleWords("shan't") === "sahn't",
  "Punctuation should remain at the same place as it started"
);
console.log(
  ScrambleWords("-dcba") === "-dbca",
  "Must handle special character at the start"
);
console.log(
  ScrambleWords("dcba.") === "dbca.",
  "Must handle special character at the end"
);
console.log(
  ScrambleWords(
    "you've gotta dance like there's nobody watching, love like you'll never be hurt, sing like there's nobody listening, and live like it's heaven on earth."
  ) ===
    "you've gotta dacne like teehr's nbdooy wachintg, love like ylo'ul neevr be hrut, sing like teehr's nbdooy leiinnstg, and live like it's haeevn on earth.",
  "Must handle a full sentence"
);
