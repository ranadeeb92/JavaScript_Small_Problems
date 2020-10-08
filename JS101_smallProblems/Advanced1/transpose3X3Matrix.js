// PEDAC
// UNDERSTAND THE PROBLEM:
// Questions:
// 1.
// 2.
// Input:
// -
// Output:
// -
// Rules:
// - Explicit requirements:
// -  3X3 matrix can represent by an array of arrays(an outer array containing three subArrays each one has three elements)
// - to access an element in the matrix => you can use bracket notation twice (array[row index][column index])
// - an entier row can be access by using single index (array[])
// - and by counting the number of elements in the row we can know the number of columns in the array
// - A convenient notation for accessing an entier column DOES NOT EXIST
// - transpose of 3x3 matrix means exchanging the rows and the columns of the original matrix.
// - return a new matrix (do not mutate the original matrix)
// - Implicit requirements:
// -
// -
// -

// EXAMPLES/TEST CASES:
// i:  [[1, 4, 3],
//      [5, 7, 9],
//      [8, 2, 6]]
// =>
// o:  [[1, 5, 8],
//      [4, 7, 2],
//      [3, 9, 6]]
// =>
// DATA STRUCTURES:  array (nested arrays)
// ALGORYTHM:
// declare a variable result and initialized with empty array
//  loop over the row of the matrix starting from index 0
//   - loop over the columns of the matrix starting from 0
//      - extract columns current element
//      - add it to a new array called column
//   - append column to array result
// return resutl
// PSEUDOCODE:
//

function transpose(matrix) {
  let result = [];
  for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
    let column = [];
    for (let columnIndex = 0; columnIndex < matrix.length; columnIndex++) {
      column.push(matrix[columnIndex][rowIndex]);
    }
    result.push(column);
  }
  return result;
}

// Algorithm transposeInPlace
// compute rows number and assign it to m varaibe
// compute columns number and assign it to n variable
// start a loop from rowIndex = 0 until m
//  - start an inner loop from columnIndex = rowIndex until n
//     - declare a variable element1 and assign it to current matrix element[rowIndex][columnIndex]
//     - declare a variable element2 and assign it to current matrix element[columnIndex][rowIndex]
//     - swap betwwen element1 and element2
// return matrix

// transposeInPlace without using transpose
function transposeInPlace(matrix) {
  let m = matrix.length;
  let n = matrix[0].length;

  for (let rowIndex = 0; rowIndex < m; rowIndex++) {
    for (let columnIndex = rowIndex; columnIndex < n; columnIndex++) {
      let element1 = matrix[rowIndex][columnIndex];
      let element2 = matrix[columnIndex][rowIndex];
      matrix[rowIndex][columnIndex] = element2;
      matrix[columnIndex][rowIndex] = element1;
    }
  }
  return matrix;
}

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
];

// const matrix = [
//   [1, 5, 8, 9],
//   [4, 7, 2, 8],
//   [3, 9, 6, 7],
//   [4, 5, 6, 5],
// ];

//let newMatrix = transpose(matrix);
transposeInPlace(matrix);

//console.log(newMatrix); // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix.join("\n")); // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]
