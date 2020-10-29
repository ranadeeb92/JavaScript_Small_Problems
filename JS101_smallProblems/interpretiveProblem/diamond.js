// Write a function that displays a four-pointed diamond in an nxn grid, where n is an odd integer supplied as an argument to the function. You may assume that the argument will always be an odd integer.

// diamond(1);
// // // logs
// // *

// diamond(3);
// // // logs
// //  *
// // ***
// //  *

// diamond(9);
// // // logs
// //     *
// //    ***
// //   *****
// //  *******
// // *********
// //  *******
// //   *****
// //    ***
// //     *

// PEDAC
// Input:
// -number (n is an odd number)
// Output:
// - four-pointed diamond in an nxn grid
// Rules:
// - Explicit requirements:
// -
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
//  creat a matrix nxn
//  fill the middle row of the matrix with x
//  start a loop over the matrix from first row until the middle row
//    - start a loop over the matrix from middle  col until first col
//          - append x in each matrix element
// PSEUDOCODE:
//

function diamond(n) {
  let matrix = Array(n)
    .fill()
    .map((ele) => Array(n).fill(" "));
  let middle = Math.floor(n / 2);
  matrix[middle].fill("x");
  // upper side
  for (let row = 0; row < middle; row++) {
    for (let col = middle - row; col <= middle + row; col++) {
      matrix[row][col] = "x";
    }
  }
  // lower side
  for (let row = middle + 1; row < n; row++) {
    let t = row - middle;
    for (let col = t; col < n - t; col++) {
      matrix[row][col] = "x";
    }
  }

  console.log(matrix);
}

diamond(5);
