// input :  array of integers
// output : string
// rule:
// -the output string represents the value of:
// -multiplies all integers together
// -divide the result by array length
// -round the result to three decimel places

// algo:
// declare a variable to hold the result
// compute the multiplicative average
//  -loop over the input array
//  -multiplies all its element
//  -divides the previous result by array length
//  -rounde to three decimal places
// convert result to string
// return result

// function multiplicativeAverage(array) {
//   let result = 0;
//   // compute the average
//   result =
//     array.reduce((acc, ele) => {
//       return acc * ele;
//     }, 1) / array.length;

//   return String(result.toFixed(3));
// }

function multiplicativeAverage(array) {
  let average = array.reduce((acc, ele) => acc * ele, 1) / array.length;
  return average.toFixed(3);
}

console.log(multiplicativeAverage([3, 5])); // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17])); // "28361.667"
