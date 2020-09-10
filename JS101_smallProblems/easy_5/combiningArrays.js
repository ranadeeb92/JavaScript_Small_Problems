// input : two arrays
// output : array
//rule : returned array containing the union of the values from the two input arrays.
// no duplication of values in the output
// even if there are duplications in input arrays.
// example: [1, 3, 5] ,[3, 6, 9] => [1, 3, 5, 6 , 9]

// algorithm:
// declare a variable mixedArr assigned an empty array to it.
// combining the input arrays in mixed array
//  - build an array that has both input arrays elements
//  - make sure there are no duplications
// return mixedArr

function union(arr1, arr2) {
  let mixedArr = [];
  copyWithNoDuplications(mixedArr, arr1);
  copyWithNoDuplications(mixedArr, arr2);
  return mixedArr;
}

function unionarrays() {
  let mixedArr = [];
  for (let index = 0; index < arguments.length; index++) {
    copyWithNoDuplications(mixedArr, arguments[index]);
  }
  return mixedArr;
}

function copyWithNoDuplications(resultarr, array) {
  for (let index = 0; index < array.length; index++) {
    if (!myIncludes(resultarr, array[index])) {
      resultarr.push(array[index]);
    }
  }
}

function myIncludes(array, ele) {
  for (let index = 0; index < array.length; index++) {
    if (array[index] === ele) return true;
  }
  return false;
}
console.log(union([1, 3, 5, 5], [3, 6, 9]));
console.log(unionarrays([1, 2, 3, 4, 4], [3, 7], [3, 9, 7]));
