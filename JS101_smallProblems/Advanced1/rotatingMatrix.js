// PEDAC
// UNDERSTAND THE PROBLEM:
// Questions:
// 1.
// 2.
// Input:
// -  matrix(MxN)
// Output:
// -  90-dregrees rotated new matrix
// Rules:
// - Explicit requirements:
// -  A 90-degrees rotation of a matrix produces a new matrix in which each side of the matrix is rotated clockwise by 90 degrees
// - a 90-degrees rotation of a non-square matrix is similar.
// - 90- dergrees rotation means each row in the matrix becomes a column
// - Implicit requirements:
// -
// -
// -

// EXAMPLES/TEST CASES:
// i:  1 5 8
//     4 7 2
//     3 9 6
// =>
// o:  3 4 1
//     9 7 5
//     6 2 8
// =>
// DATA STRUCTURES:
// ALGORYTHM:
//  declare a variable result and initalized with empty array
//  compute rows number in the input matrix and assign it to m variable
//  compute columns number in the input matrix and assign it to n varaible
//  start a loop from index1 = 0 until n
//   - declare a variable newRow and initalized with empty array
//   - start an inner loop from index2 = 0 until m
//     - push current Matrix element matrix[index1][index2] to newRow array
//   - add new array result array after reverse it
// return result
// PSEUDOCODE:
//

function reverse(array) {
  let firstElement = array[0];
  array[0] = array[array.length - 1];
  array[array.length - 1] = firstElement;
  return array;
}
function rotate90(matrix) {
  let m = matrix.length;
  let n = matrix[0].length;
  let result = [];
  for (let index = 0; index < n; index++) {
    let newRow = [];
    for (let index2 = 0; index2 < m; index2++) {
      newRow.push(matrix[index2][index]);
    }
    result[index] = reverse(newRow);
  }
  return result;
}
let matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

let matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];
console.log(rotate90(matrix1));
console.log(rotate90(matrix2));
