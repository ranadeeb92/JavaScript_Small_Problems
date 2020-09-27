// PEDAC
// UNDERSTAND THE PROBLEM:
// Questions:
// 1.
// 2.
// Input:
// -  strings(word , text)
// Output:
// -  integer (represent a number of times the word appears in text)
// Rules:
// - Explicit requirements:
// -
// - Implicit requirements:
// - search with insensitive case
// -
// -

// EXAMPLES/TEST CASES:
// i:
// =>
// o:
// =>
// DATA STRUCTURES:
// ALGORYTHM:
//  declare a variable called count and initialized with 0
//  convert text string to an array of words
//  loop over words array
//    - if word equal current element(in lower case) exist in  words array
//      - increment count by one
//  return count
// PSEUDOCODE:
//

function searchWord(word, text) {
  let count = 0;
  text.split(" ").forEach((element) => {
    if (element.toLowerCase() === word) {
      count += 1;
    }
  });

  return count;
}

const text =
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Sed quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?";

console.log(searchWord("sed", text)); // 4
console.log(searchWord("est", text)); // 0
console.log(searchWord("est,", text)); // 2
