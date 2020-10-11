// PEDAC
// Input:
// - string (string of words or maybe empty string)
// Output:
// - string(hastage form) or false
// Rules:
// - Explicit requirements:
// - start with #
// - all words must have their first letter capitalized
// - if the final string length > 140 character => return false
// - if the input or the result string is empty  => return false
// - Implicit requirements:
// -   if we have spaces between words => ignore them
// -  if input string with out spaces > 140 chars => return false
// -

// EXAMPLES/TEST CASES:
// i:
// =>
// o:
// =>
// DATA STRUCTURES:  arrays
// ALGORYTHM:
//  if the input string is empty => return false
//  build the hastage string
//   - convert the input string to array of words without any empty strings
//   - declare hashtagStr = ""
//   - loop over the array of words
//     -  hashtagStr += capitalize the current word
//  if the hashtagStr length >= 140  or it is empty string => return false
//  else return hashtagStr
// PSEUDOCODE:
//

function generateHashtag(str) {
  if (str.length === 0) return false;
  let words = str.split(" ").filter((ele) => ele !== "");
  let hashTag = "";
  words.forEach((word) => {
    hashTag += word[0].toUpperCase() + word.slice(1).toLowerCase();
  });
  return hashTag.length >= 140 || hashTag === "" ? false : `#${hashTag}`;
}

console.log(
  generateHashtag(""),
  false,
  "Expected an empty string to return false"
);
console.log(generateHashtag(" ".repeat(200)), false, "Still an empty string");
console.log(
  generateHashtag("Do We have A Hashtag"),
  "#DoWeHaveAHashtag",
  "Expected a Hashtag (#) at the beginning."
);
console.log(
  generateHashtag("Codewars"),
  "#Codewars",
  "Should handle a single word."
);
console.log(
  generateHashtag("Codewars Is Nice"),
  "#CodewarsIsNice",
  "Should remove spaces."
);
console.log(
  generateHashtag("Codewars is nice"),
  "#CodewarsIsNice",
  "Should capitalize first letters of words."
);
console.log(generateHashtag("code" + " ".repeat(140) + "wars"), "#CodeWars");
console.log(
  generateHashtag(
    "Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"
  ),
  false,
  "Should return false if the final word is longer than 140 chars."
);
console.log(
  generateHashtag("a".repeat(139)),
  "#A" + "a".repeat(138),
  "Should work"
);
console.log(generateHashtag("a".repeat(140)), false, "Too long");
