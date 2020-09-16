// PEDAC
// UNDERSTAND THE PROBLEM:
// Questions:
// 1.
// 2.
// Input:
// -  two arrays array1, array2 (arrays of numbers)
// Output:
// -  sorted array of products all number pairs between array1 and array2
// Rules:
// - Explicit requirements:
// -   neither arrgument will be an empty array
// -   output array should sorted in ascending numeric order
// - Implicit requirements:
// -  output array length equal to array1 length * array1 length
// -
// -

// EXAMPLES/TEST CASES:
// i:  [2, 4], [4, 3, 1, 2]
// =>
// o:   [2, 4, 4, 6, 8, 8, 12, 16]
// =>
// DATA STRUCTURES:
// ALGORYTHM:
// declare a variable result an initialize it with empty array
// start a loop from index equal to zero unitl index < arry1.length
//  - start inner loop from index zero until index < array2.length
//      - productPairs =  array1[index] with array2[index]
//      - append productPairs to result
//      - increment the index by one
//  - end inner loop
//  - increment outer index by one
// end the outer loop
// sort the result array
// return sorted array
// PSEUDOCODE:
//

function multiplyAllPairs(arr1, arr2) {
  let result = [];
  for (let index = 0; index < arr1.length; index++) {
    for (let index2 = 0; index2 < arr2.length; index2++) {
      let productPairs = arr1[index] * arr2[index2];
      result.push(productPairs);
    }
  }
  return result.sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2])); // [2, 4, 4, 6, 8, 8, 12, 16]
