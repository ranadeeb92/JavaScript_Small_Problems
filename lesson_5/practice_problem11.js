// Advanced javascript collections
// Practice problem 11
/**
 * use the map method to return a new array identical in structure to the original
 * but with each the number incremented by 1.
 * Do not modify the original data structure.
 */

let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

// deep copy
let copyArray = JSON.parse(JSON.stringify(arr));

let newArr = copyArray.map((obj) => {
  for (let key in obj) {
    obj[key] += 1;
  }
  return obj;
});
// or another way
// arr.map(obj => {
//   let incrementedObj = {};

//   for (let key in obj) {
//     incrementedObj[key] = obj[key] + 1;
//   }

//   return incrementedObj;
// });
console.log(arr);
console.log(copyArray);
console.log(newArr);
