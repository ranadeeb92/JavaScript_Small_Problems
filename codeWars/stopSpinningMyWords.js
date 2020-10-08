// PEDAC
// Input:
// - string (of at least one word)
// Output:
// - string (with that words of length >= 5 reversed)
// Rules:
// - Explicit requirements:
// - input strings only letters and spaces
// -
// - Implicit requirements:
// -
// -
// -

// EXAMPLES/TEST CASES:
// i: Welcome
// =>
// o: emocleW
// =>
// DATA STRUCTURES: array
// ALGORYTHM:
//  convert string to array of words
//  loop over the words array
//    -  check if the length of current word is >= 5
//    - ==> reversed this word
//  convert array to string and return string
// PSEUDOCODE:
//

function spinWords(str) {
  return str
    .split(" ")
    .map((word) => (word.length >= 5 ? revers(word) : word))
    .join(" ");
}

function revers(w) {
  let reversedWord = "";
  for (let index = w.length - 1; index >= 0; index--) {
    reversedWord += w[index];
  }
  return reversedWord;
}

console.log(spinWords("Welcome"), "emocleW");
console.log(spinWords("Hey fellow warriors"), "Hey wollef sroirraw");
console.log(spinWords("This is a test"), "This is a test");
console.log(spinWords("This is another test"), "This is rehtona test");
console.log(
  spinWords("You are almost to the last test"),
  "You are tsomla to the last test"
);
console.log(
  spinWords("Just kidding there is still one more"),
  "Just gniddik ereht is llits one more"
);
console.log(
  spinWords("Seriously this is the last one"),
  "ylsuoireS this is the last one"
);
