// input : string
// output : string
// rules :
// the function should not double vowels, digits, punctuation or whitespace
// the function shoulf double just the letters a-z A-Z

// algorithem:
// 1- declare a varaible to hold the new string str and assing emplty string to it
// 2- loop through the input string appending each char to str with doubling consonants
//   - for each character check if this character is a letter and not vowel
//     - if it is append it twice to str
//     - else append it once
// 3- return new string

function doubleConsonants(str) {
  let new_str = "";
  for (let index = 0; index < str.length; index++) {
    if (isLetter(str[index]) && !isVowel(str[index])) {
      new_str += str[index] + str[index];
    } else {
      new_str += str[index];
    }
  }
  return new_str;
}

function isLetter(char) {
  return (char >= "a" && char <= "z") || (char >= "A" && char <= "Z");
}

function isVowel(char) {
  return ["a", "e", "i", "o", "u"].includes(char);
}

console.log(doubleConsonants("String")); // "SSttrrinngg"
console.log(doubleConsonants("Hello-World!")); // "HHellllo-WWorrlldd!"
console.log(doubleConsonants("July 4th")); // "JJullyy 4tthh"
console.log(doubleConsonants("")); // ""
