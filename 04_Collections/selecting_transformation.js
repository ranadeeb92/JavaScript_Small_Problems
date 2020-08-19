// Select fruit value only from object
// let produce = {
//   apple: 'Fruit',
//   carrot: 'Vegetable',
//   pear: 'Fruit',
//   broccoli: 'vegetable'
// };

// function selectFruit(obj) {
//   let fruitObj = {};
//   for (let key in obj) {
//     if(obj[key] === 'Fruit') {
//       fruitObj[key] = obj[key]
//     }
//   }
//   return fruitObj;
// }

// console.log(selectFruit(produce));

// doubleNumbers function mutate the array argument
// let myNumbers = [1, 4, 3, 7, 2, 6];

// function doubleNumbers(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i] * 2;
//   }
//   return arr;
// }

// doubleNumbers(myNumbers);
// console.log(myNumbers);

// Transform the number in an array based on their position not on their value
// function to double the numbers in an given array that have odd indices
 
// let myNumbers = [1, 4, 3, 7, 2, 6];

// function doubleNumWithOddIndices(arr) {
//   let doubledNumber = [];
//   for (let i = 0; i < arr.length; i++) {
//     let currentNumber = arr[i];
//     if (i % 2 === 1) {
//       doubledNumber.push(currentNumber * 2);
//     } else {
//       doubledNumber.push(currentNumber);
//     }
//   }
//    return doubledNumber;
// }

// console.log(doubleNumWithOddIndices(myNumbers));

// a function that lets you multiply every array item by a specified value
 function multiply(arr, number) {
   let multipliedArray = [];
   for (let i = 0; i < arr.length; i++) {
     multipliedArray.push(arr[i] * number);
   }
   return multipliedArray;
 }

 let myNumbers = [1, 2, 3, 4];
 console.log(multiply(myNumbers, 4));

