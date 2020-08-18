// Advanced javascript collections
// Practice problem 9
/*
 * return a new array with the same structure,
 * but with the subarrays ordered -- alphabetically or numerically as appropriate
 * in ascending order
 */

let arr = [
  ["b", "c", "a"],
  [2, 1, 3],
  ["blue", "black", "green"],
];

let orderedArray = arr.map((innerArr) => {
  if (innerArr.every((ele) => typeof ele === "number")) {
    return innerArr.slice().sort((a, b) => a - b);
  } else {
    return innerArr.slice().sort();
  }
});

console.log(arr);
console.log(orderedArray);
