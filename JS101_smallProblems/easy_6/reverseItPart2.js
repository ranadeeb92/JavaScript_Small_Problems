// input : string containg(one or more words)
// output : string
// rules:
// words that have five or more letter => revers its letters
// words seperated by single space
// no empty input string

// algo:
// convert input string to array of words
// loop over the array to reverse the words that have five or more letters
//   - for each word check its length if equal or greater the five
//    - if it is rverse the word
//    - else do nothing
// convert array to string
// return the string

function reverseWords(str) {
  return str
    .split(" ")
    .map((word) =>
      word.length >= 5 ? word.split("").reverse().join("") : word
    )
    .join(" ");
}

console.log(reverseWords("Professional")); // "lanoisseforP"
console.log(reverseWords("Walk around the block")); // "Walk dnuora the kcolb"
console.log(reverseWords("Launch School")); // "hcnuaL loohcS"
