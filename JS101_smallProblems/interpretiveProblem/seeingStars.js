// Write a function that displays an 8-pointed star in an NxN grid, where N is an odd integer that is supplied as an argument to the function. The smallest such star you need to handle is a 7x7 grid (i.e., when N is 7).

//star(7);
// // *  *  *
// //  * * *
// //   ***
// // *******
// //   ***
// //  * * *
// // *  *  *

star(9);

// // *   *   *
// //  *  *  *
// //   * * *
// //    ***
// // *********
// //    ***
// //   * * *
// //  *  *  *
// // *   *   *

// PEDAC
// Input:
// - number (odd interger)
// Output:
// - 8-pointed star
// Rules:
// - Explicit requirements:
// -   n >= 7
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
//  creat a matrix of nxn filled with empty strings
//
//
//
// PSEUDOCODE:
//

function star(n) {
  let matrix = Array(n)
    .fill()
    .map((ele) => Array(n).fill(" "));
  let middle = Math.floor(n / 2);
  matrix[middle].fill("*");

  for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
      if (col === row || col === middle * 2 - row || col === middle) {
        matrix[row][col] = "*";
      }
    }
  }

  matrix.forEach((ele) => console.log(ele.join("")));
}
