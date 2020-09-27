// PEDAC
// UNDERSTAND THE PROBLEM:
// Questions:
// 1.
// 2.
// Input:
// -  string(word, text)
// Output:
// -  string(text with every instance of word highlighted)
// Rules:
// - Explicit requirements:
// -   highlight the word using ** on exh side and convert the word to uppercase
// - Implicit requirements:
// -   search with insensitive case
// -
// -

// EXAMPLES/TEST CASES:
// i:
// =>
// o:
// =>
// DATA STRUCTURES:
// ALGORYTHM:
//  convert text to an array of words
//  loop over words array
//    - if word === current element(in lower case) in words
//       - higlight the word
//          - convert this word to uppercase
//          - start and end this word with **
//       - add the higlighted word to a new array
//    - add the current element as it to a new array
//  convert the new array words to string
// return  the string
// PSEUDOCODE:
//

function searchWord(word, text) {
  return text
    .split(" ")
    .map((ele) => {
      if (ele.toLowerCase() === word) {
        return `**${ele.toUpperCase()}**`;
      } else {
        return ele;
      }
    })
    .join(" ");
}

// solution using regExp
// function searchWord(word, text) {
//   let regExp = new RegExp(word, "gi");
//   return text.replace(regExp, `**${word.toUpperCase()}**`);
// }

const text =
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Sed quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?";

console.log(searchWord("sed", text));
