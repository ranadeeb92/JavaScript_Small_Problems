// PEDAC
// Input:
// - string
// Output:
// - string (transforemd based on the input)
// Rules:
// - Explicit requirements:
// - reverse the oreder of the words
// - change each charater case lowerCase to upperCase and vise versa
// - Implicit requirements:
// -  if the input string has one word no need to revverse it
// -
// -

// EXAMPLES/TEST CASES:
// i:
// =>
// o:
// =>
// DATA STRUCTURES:
// ALGORYTHM:
// loop over input string
//   - for each characters change its case and add it to newStr
// convert newStr to array of words
// reverse its elements
// convert it back to string
// return string
// PSEUDOCODE:
//

function stringTransformer(str) {
  let newStr = "";
  if (str.length === 0) return newStr;
  for (let index = 0; index < str.length; index++) {
    newStr += isLowerCase(str[index])
      ? str[index].toUpperCase()
      : str[index].toLowerCase();
  }
  return newStr.split(" ").reverse().join(" ");
}

function isLowerCase(char) {
  return char >= "a" && char <= "z";
}

function stringTransformer(str) {
  if (str.length === 0) return "";
  return str
    .split(" ")
    .map((word) => {
      let newStr = "";
      for (let index = 0; index < word.length; index++) {
        newStr += isLowerCase(word[index])
          ? word[index].toUpperCase()
          : word[index].toLowerCase();
      }
      return newStr;
    })
    .reverse()
    .join(" ");
}

console.log(stringTransformer("Example string") === "STRING eXAMPLE");
