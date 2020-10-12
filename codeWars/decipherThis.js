// PEDAC
// Input:
// - string
// Output:
// - string (after decipher the input string)
// Rules:
// - Explicit requirements:
// - switch the the second letter with the last letter
// - first letter is replaced by its character code
// - Implicit requirements:
// -
// -
// -

// EXAMPLES/TEST CASES:
// i:  72olle => charCode(72) => H , switch the second letter with the last letter => o, e
// =>  Hello
// o:
// =>
// DATA STRUCTURES: arrays
// ALGORYTHM:
//  convert the input string to an array of words
//  loop over the words array
//    - for each word
//      - decephire thi word and put the result in a new array
// convert new array ro string
// return string
//
// PSEUDOCODE:
//
function decipherThis(str) {
  let words = str.split(" ");
  return words
    .map((word) => {
      return decipher(word);
    })
    .join(" ");
}

function decipher(w) {
  let secondPart = "";
  let code = "";
  for (let index = 0; index < w.length; index++) {
    if (w[index] >= "a" && w[index] <= "z") {
      secondPart = w.slice(index);
      break;
    } else {
      code += w[index];
    }
  }

  secondPart =
    secondPart && secondPart.length > 1
      ? switchLetters(secondPart)
      : secondPart;

  return String.fromCharCode(Number(code)) + secondPart;
}

function switchLetters(str) {
  return str[str.length - 1] + str.slice(1, str.length - 1) + str[0];
}

console.log(
  decipherThis("72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o") ===
    "Have a go at this and see how you do"
);
