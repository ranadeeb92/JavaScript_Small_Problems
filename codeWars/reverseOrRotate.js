// PEDAC
// Input:
// -string (string of digits)  , number (size)
// Output:
// -
// Rules:
// - Explicit requirements:
// -  Cut the string into chunks (a chunk here is a substring of the initial string) of size sz
// - ignore the last chunk if its size is less than sz
// - if a chunck represent a number (sum of its cubes digits % 2 === 0) , reverse this chunck
// - else rotate this chunck to the left by one position
// - sz is <= 0 or if str is empty return ""
// - sz is > string length  => return ""
// - Implicit requirements:
// -
// -
// -

// EXAMPLES/TEST CASES:
// i: "123456987654" , 6 => 123456, 987654
// =>  1 ^ 3 + 2 ^ 3 + 3 ^ 3 + 4 ^ 3 + 5 ^ 3 + 6 ^ 3 => 433 % 2 !== 0 => 234561
// => 987654 => 876549
// => 234561876549
// o:
// =>
// DATA STRUCTURES:
// ALGORYTHM:
//  extract all chuncks from input string with size sz
//  loop over chuncks
//    - for each chunk check if the sum of its digits cubed % 2 === 0
//      - reverse the chunck digits
//    - else
//      - rotate the chunk to the left by one position
//  concatenat the chunks and return the result
// PSEUDOCODE:
//
function revrot(str, sz) {
  if (sz <= 0 || str.length === 0) return "";
  if (sz > str.length) return "";
  let chunks = [];
  for (let index = 0; index < str.length; index += sz) {
    if (str.slice(index, index + sz).length === sz) {
      chunks.push(str.slice(index, index + sz));
    }
  }

  return chunks
    .map((chunk) => {
      let sum = 0;
      for (let index = 0; index < chunk.length; index++) {
        sum += Math.pow(Number(chunk[index]), 3);
      }
      if (sum % 2 === 0) {
        return reversChunk(chunk);
      } else {
        return rotateChunk(chunk);
      }
    })
    .join("");
}

function reversChunk(str) {
  return str.split("").reverse().join("");
}
function rotateChunk(str) {
  return str.slice(1) + str[0];
}

console.log(revrot("1234", 0) === "");
console.log(revrot("", 0) === "");
console.log(revrot("1234", 5) === "");
let s = "733049910872815764";
console.log(revrot(s, 5) === "330479108928157");
