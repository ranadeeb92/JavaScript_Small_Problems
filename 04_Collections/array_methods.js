// select the key-value pairs
// from produce object where the value is vegetable
// and return an object not an array

let produce = {
  apple : 'fruit',
  broccoli : 'vegetable',
  pear : 'fruit',
  carrot : 'vegetable'
};

// using filter()
// let vegetableArray = Object.entries(produce).filter(ele => {
//   let [key, value] = ele;
//   return value === 'vegetable';
// });

// let vegObject = {};
// vegetableArray.forEach(ele => {
//   let [key, value] = ele;
//   vegObject[key] = value;
// });

// console.log(vegObject);

// use forEach() only
// let vegObject = {};

// Object.entries(produce).forEach(element => {
//   let [key, value] = element;
//   if (value === 'vegetable') {
//     vegObject[key] = value;
//   }
// });

// console.log(vegObject);

// filter and map with strings
let str = "what's up, Doc?";
// let vowelStr = str.split('').filter(char => 'aeuoi'.includes(char.toLowerCase())).join('');
// console.log(vowelStr);

let duplicateChar = str.split('')
                       .map(char =>  char + char)
                       .join('');

console.log(duplicateChar);