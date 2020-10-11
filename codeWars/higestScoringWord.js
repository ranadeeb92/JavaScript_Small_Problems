// PEDAC
// Input:
// - string (string of words)
// Output:
// - string (the highest scoring word)
// Rules:
// - Explicit requirements:
// -  Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
// - If two words score the same, return the word that appears earliest in the original string.
// - all letters will be lowercase
// - all input are valid strings
// - Implicit requirements:
// -
// -
// -

// EXAMPLES/TEST CASES:
// i:  'take me to semynak' =>
// =>
// o:
// =>
// DATA STRUCTURES:
// ALGORYTHM:
//  create an array of all alphabet letters => its point represented by letter index + 1
//  [a, b, c, ...] => a => a point is 0 + 1=> 1
//  comput each word score and add the result to scores array
//  sort the scores array in descending order
//  return the first element in the scores rray
// PSEUDOCODE:
//

function high(x) {
  let alphabet = Array(26)
    .fill()
    .map((_, index) => String.fromCharCode(index + 97));

  let scores = x.split(" ").map((word) => {
    let score = 0;
    for (let index = 0; index < word.length; index++) {
      score += alphabet.indexOf(word[index]) + 1;
    }
    return [word, score];
  });

  return scores.sort((a, b) => b[1] - a[1])[0][0];
}

// function high(x){
//   let alphabet = Array(26).fill().map((_,index)=> String.fromCharCode( index + 97) );
//   let words = x.split(' ');
//   let scores = words.map(word => {
//     let score = 0;
//     for(let index = 0; index < word.length; index++){
//       score += alphabet.indexOf(word[index]) + 1;
//     }
//     return score;
//   });

//   let max = 0;
//   let result = '';
//   scores.forEach((score, index) => {
//     if(score > max){
//       max = score;
//       result = words[index];
//     }
//   });
//   return result;
// }

console.log(high("man i need a taxi up to ubud") === "taxi");
console.log(high("what time are we climbing up the volcano") === "volcano");
console.log(high("take me to semynak") === "semynak");
