// PEDAC
// Input:
// - string and optionall (minor words are always lowercase except the first word)
// Output:
// - string in title case format
// Rules:
// - Explicit requirements:
// - a string is title case :
//      => each word in the string is either capitalized
//      => or to be an exception and put entirely into lower case unless it is the first word
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
//  convert the string to array of words
//  declare a newStr var and initia;ized with empty string
//  loop over the array of words
//   - capitalize each word
//  covert this array to string
// return string
// PSEUDOCODE:
//

function titleCase(title, minorWords) {
  if (title.length === 0) return "";
  minorWords =
    minorWords !== undefined ? minorWords.toLowerCase().split(" ") : minorWords;
  if (minorWords) {
    return title
      .toLowerCase()
      .split(" ")
      .map((word, index) => {
        if (minorWords.includes(word) && index !== 0) {
          return word;
        }
        return word[0].toUpperCase() + word.slice(1);
      })
      .join(" ");
  }
  return title
    .toLowerCase()
    .split(" ")
    .map((word, index) => {
      return word[0].toUpperCase() + word.slice(1);
    })
    .join(" ");
}

console.log(titleCase(""), "");
console.log(titleCase("a clash of KINGS", "a an the of"), "A Clash of Kings");
console.log(
  titleCase("THE WIND IN THE WILLOWS", "The In"),
  "The Wind in the Willows"
);
console.log(titleCase("the quick brown fox"), "The Quick Brown Fox");
