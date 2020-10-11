// PEDAC
// Input:
// -NxN arraya
// Output:
// - array (of two elements location of mine)
// Rules:
// - Explicit requirements:
// -  mine is represented as the integer 1 in 2d array
// - areas in 2d array that are not the mine will represent as 0
// - [row index, column index](index of mine location)
// = there is one mine in the array
// - Implicit requirements:
// -
// -
// -

// EXAMPLES/TEST CASES:
// i:
// =>
// o:
// =>
// DATA STRUCTURES: arrays
// ALGORYTHM:
//  find the location of mine (mine is 1 integer in NxN array of 0)
//    - loop over rows of the array
///     - loop over columns of the array
//        - check if element[row index][coulumn index]  = 1
//        - location = [row index, coulumn index]
//  return the location[row index, column index]
//
//
// PSEUDOCODE:
//

function mineLocation(field) {
  let location = [];
  for (let row = 0; row < field.length; row++) {
    for (let col = 0; col < field.length; col++) {
      if (field[row][col] === 1) {
        location = [row, col];
        break;
      }
    }
  }
  return location;
}

console.log(
  mineLocation([
    [1, 0],
    [0, 0],
  ]),
  [0, 0]
);
console.log(
  mineLocation([
    [1, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]),
  [0, 0]
);
console.log(
  mineLocation([
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 0],
  ]),
  [2, 2]
);
