// PEDAC
// UNDERSTAND THE PROBLEM:
// Questions:
// 1.
// 2.
// Input:
// - data (sorted array), serachItem (could be any type)
// Output:
// - number (index of the search item)
// Rules:
// - Explicit requirements:
// -  using binary search algorithm
// - binary search :
// - 1- retrieve the middle value from data
// - 2- if the middle value is equal to itemSreach , stop the search
// - 3- if the middle value is less than itemSreach:
//       3.1- dicard the lower half, including the middle value
//       3.2- repeat process from the top, using the upper half as a starting data
// - 4- if the middle value is greater than itemSearch, do the same thing as the previous step, but with the oppsite halves.
// - Implicit requirements:
// -
// -
// -

// EXAMPLES/TEST CASES:
// i:  [1, 2, 4, 6, 8, 9] , itemSreach = 8 => middle value = 4
// if(4 === 8) ==> no
// if(4 < 8) ==> yes
//  - data = [6, 8, 9] => middle value = 8
// if (8 === 8) => yes Stop search
// =>
// o:
// =>
// DATA STRUCTURES: arrays
// ALGORYTHM:
//  make a copy of the input array
//  applay binary algorithm to search for itemSreach
//    - get the middle value of the copy
//    - if middle value === itemSearch => return index of this item and stop searching
//    - else if middle value < itemSearch
//       - ignore the lower half of the copy array
//       - repeat the algrithm from the top for the upper part of the copy
//    - else if middle value > itemSearch
//       - ignore the upper half of the copy array
//       - repeat the algrithm from the top for the lower part of the copy
//  return index of the itemSreach if exist, otherwise return -1
// PSEUDOCODE:
//

// function binarySearch(data, searchItem) {
//   let copyData = data.slice(0);
//   let middleValue = copyData[Math.floor(copyData.length / 2)];
//   if (middleValue === searchItem) return middleValue;
//   if (copyData.length === 1) return searchItem;
//   if (middleValue < searchItem) {
//     copyData = copyData.slice(copyData.indexOf(middleValue) + 1);
//     console.log(copyData);
//     middleValue = binarySearch(copyData, searchItem);
//   } else {
//     copyData = copyData.slice(0, copyData.indexOf(middleValue));
//     console.log(copyData);
//     middleValue = binarySearch(copyData, searchItem);
//   }
//   return data.indexOf(middleValue);
// }

function binarySearch(data, searchItem) {
  let high = data.length;
  let low = 0;
  let middle;
  while (low <= high) {
    middle = Math.floor((high + low) / 2);
    //console.log(low, high);
    if (data[middle] === searchItem) {
      return middle;
    } else if (data[middle] < searchItem) {
      low = middle + 1;
    } else {
      high = middle - 1;
    }
  }
  return -1;
}

let yellowPages = [
  "Apple Store",
  "Bags Galore",
  "Bike Store",
  "Donuts R Us",
  "Eat a Lot",
  "Good Food",
  "Pasta Place",
  "Pizzeria",
  "Tiki Lounge",
  "Zooper",
];
console.log(binarySearch(yellowPages, "Pizzeria")); // 7
console.log(binarySearch(yellowPages, "Apple Store")); // 0

console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77)); // -1
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89)); // 7
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5)); // 1

console.log(
  binarySearch(
    ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"],
    "Peter"
  )
); // -1
console.log(
  binarySearch(
    ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"],
    "Tyler"
  )
); // 6

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 9], 3));
