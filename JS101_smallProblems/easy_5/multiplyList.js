// input : two arrays(list of numbers)
// ouput : array (product array)
// rules:
// - product of each pair of numbers from the arguments that have the same index
// - both input arrays has the same length

// algorithm:
// compute the product array
//  -loop over the input arrays and multiplies the elements that has same index
// -add the multiply result to the product array
// return the product array

function multiplyList(arr1, arr2) {
  return arr1.map((num, index) => num * arr2[index]);
}

// using for
function multiplyList(arr1, arr2) {
  let result = [];
  for (let index = 0; index < arr1.length; index++) {
    result.push(arr1[index] * arr2[index]);
  }
  return result;
}
console.log(multiplyList([3, 5, 7], [9, 10, 11])); // [27, 50, 77]
