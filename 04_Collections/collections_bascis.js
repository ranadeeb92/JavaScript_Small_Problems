// String element reference 
/*
let str = "The grass is green";

console.log(str.slice(4,9));

console.log(str.slice(4,(4 + "grass".length)));

console.log(str.slice(2));

console.log(str.slice(-2));
*/

// Array element reference
/*
let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

console.log(arr.slice(2,5)[0]);

let arr1 = arr.slice();

arr1[0] = 'A';
console.log(arr1);
console.log(arr);
*/

// Object element refrence
// Two ways to refrence element in object
// 1) dot notation obj.property name/key
// 2) bracet notation obj['key/property name']
/*
let obj = {fruit : 'apple', vegtebale : 'carrot', fruit: 'pear'};

console.log(Object.keys(obj));
console.log(Object.values(obj));
*/

// Arrays are objects
//let arr = ['foo', 'bar', 'qux'];
// arr['boo'] = 'hoo';
// arr[-1] = 347;
// console.log(arr);
// arr.forEach(ele => console.log(ele));
// console.log(Object.keys(arr));
// console.log(arr.length);
//console.log(arr.join(''));

// convert object to array
// let obj = {sky: 'blue', grass: 'green'};
// console.log(Object.entries(obj));

//Element Assignment
let arr = [1, 2, 3, 4];
for (let i = 0; i< arr.length; i++) {
  arr[i] = arr[i] + 1;
}

console.log(arr);
console.log(arr[4] = arr[4] + 1);
console.log(arr);