// input : array
// output : array
//rules : 
// the elements of the returned array should be the elements in the array argument that have 
// an even index


// algo:
// declare a variable called OddList as an empty array
// loop through the array argument
// for each iteration 
// check from the index number if it is even
// add the element's value to the oddList
// return oddList

function getOddList(array) {
  let oddList = [];
  for (let index = 0; index < array.length; index++) {
    if(index % 2 === 0) {
      oddList.push(array[index])
    }
  }
  return oddList;
}

// console.log(getOddList([2, 3, 4, 5, 6]));
// console.log(getOddList([1, 2, 3, 4, 5, 6]));
// console.log(getOddList(["mxnv", 'dfkjd']));
// console.log(getOddList([434]));
// console.log(getOddList([]));

// write a companion function that retuns the 2th, 4th, 6th and so on elements of an array.
function getEvenList(array) {
  return array.filter((ele, index) => index % 2 === 1 );
}

console.log(getEvenList([2, 3, 4, 5, 6]));
console.log(getEvenList([1, 2, 3, 4, 5, 6]));
console.log(getEvenList(["mxnv", 'dfkjd']));
console.log(getEvenList([434]));
console.log(getEvenList([]));
