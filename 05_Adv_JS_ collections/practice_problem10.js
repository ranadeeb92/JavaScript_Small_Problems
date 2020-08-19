// Advanced javascript collections
// Practice problem 10
/**
 * Perform the same transformation of sorting the subarrays we did in the previous exercise    with one difference;
 * sort the elements in descending order.
 */
let arr = [
  ["b", "c", "a"],
  [2, 1, 3],
  ["blue", "black", "green"],
];

let orderedArr = arr.map((arr) => {
  if (typeof arr[0] === "string") {
    return arr.slice().sort((a, b) => {
      if (a < b) {
        return 1;
      } else if (a > b) {
        return -1;
      } else return 0;
    });
  } else {
    return arr.slice().sort((a, b) => b - a);
  }
});

console.log(orderedArr);
