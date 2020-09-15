// input : string
// output : string
// rules:
// returned string is the reversal vesion of the input string
// input string is empty => return empty string

// algo:
// convert the srting to array
// reverse the array
// convert array to string
// return the string

function reverseSentence(str) {
  return str.split(" ").reverse().join(" ");
}

console.log(reverseSentence("")); // ""
console.log(reverseSentence("Hello World")); // "World Hello"
console.log(reverseSentence("Reverse these words")); // "words these Reverse"
