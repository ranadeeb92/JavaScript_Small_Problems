// PEDAC
// UNDERSTAND THE PROBLEM:
// Questions:
// 1.
// 2.
// Input:
// -  array(two-d fruit - quantity)
// Output:
// -  array (of fruits)
// Rules:
// - Explicit requirements:
// - each fruit appears a number of times = its quantity.
// - Implicit requirements:
// -  a fruit with quantity = 0 => it will not appears in the retuned array
// -
// -

// EXAMPLES/TEST CASES:
// i:
// =>
// o:
// =>
// DATA STRUCTURES:
// ALGORYTHM:
//  declare a variable called fruit and initialize it with empty array
//  loop over the two-d input array
//     - stert a loop from index = 0 until index < fruit quantity(fruit quantity = arr[i][2])
//        - append fruit name in fruits array
//        - increment index
//      - end inner loop
//  return fruits
// PSEUDOCODE:
//

function buyFruit(arr) {
  let fruits = [];
  for (let index = 0; index < arr.length; index++) {
    for (let index2 = 0; index2 < arr[index][1]; index2++) {
      fruits.push(arr[index][0]);
    }
  }
  return fruits;
}

console.log(
  buyFruit([
    ["apple", 3],
    ["orange", 1],
    ["banana", 2],
  ])
);

console.log(
  buyFruit([
    ["apple", 0],
    ["orange", 1],
    ["banana", 2],
  ])
);
