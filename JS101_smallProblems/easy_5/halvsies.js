// input : array.
// output: array
//rules:
// - returned array has two eleements
// - each element is an array
// - first half of the input elements is in the first element of the returend array
// - second half of the input elements is in the second element of the returend array
// -if input array is odd => the first element in the returend array has the middel element
// - if odd first element array length > second element array length
// - if even they are equal

// algorithm :
// declare resultArr variable assig empty array to it.
// declare firstArr variable assig empty array to it.
// declare secondArr variable assig empty array to it.
// build the resultArr
// check if the input array odd or even
// if it is odd make sure to put the middle element in firstArr
// loop through half the input array
// in each iteration add elements to the fisrtArr
// repeat 3-4 to the other half of the input array and fill the secondArr
// add fisrtArr and secondArr to resultArr.
// return resultArr

function halvsies(array) {
  // let firstArr = [];
  // let secondArr = [];
  let resultArr = [[], []];
  let middle;
  if (array.length % 2 !== 0) {
    middle = Math.ceil(array.length / 2);
    fillArray(resultArr, array, middle);
  } else {
    middle = array.length / 2;
    fillArray(resultArr, array, middle);
  }
  return resultArr;
}

function fillArray(result, inputArr, len) {
  let [firstArr, secondArr] = result;
  for (let index = 0; index < len; index++) {
    firstArr.push(inputArr[index]);
  }
  for (let index = len; index < inputArr.length; index++) {
    secondArr.push(inputArr[index]);
  }
}

// LaunchSchool solution
// function halvsies(array) {
//   let half = Math.ceil(array.length / 2);
//   let firstArray = array.slice(0, half);
//   let secondArray = array.slice(half);
//   return [firstArray, secondArray];
// }
console.log(halvsies([1, 2, 3, 4])); // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3])); // [[1, 5, 2], [4, 3]]
console.log(halvsies([5])); // [[5], []]
console.log(halvsies([])); // [[], []]
