// String.prototype.concat(); 
// it works exactly the way that + opertator works with two strings.
// it doesn't mutate the original string, it returns a new string.
// concat can take more than one string as arguments
/*
let str = "Hello ";
let str1 = "World!";
let str2 = str.concat(str1);

let str3 = str.concat(str1, ' ', 'My name is Rana!');
str1 = str.concat(str1); // if we want to change the value of str, reassign str1 to a new string

console.log(str);
console.log(str1);
console.log(str2);
console.log(str3);
console.log(str.concat()); //if we don't pass any argument, it will return the same string
*/

// split()
//console.log('hi, hello, bye, goodbye'.split(', '));

// endsWith();
// let str = 'Cats is the best!';
// console.log(str.endsWith('best'));
// console.log(str.endsWith('best', 13));
// console.log(str.endsWith('best', 20));
// console.log(str.endsWith('best!', str.length));
// console.log(str.endsWith('best', 16));
// console.log(str.endsWith('cat!'));

// startsWith()
let str = 'Cats is the best!';
console.log(str.startsWith('Cats'));
console.log(str.startsWith('Cat', 13));
console.log(str.startsWith('Cats', 20));
console.log(str.startsWith('Cats', str.length));
console.log(str.startsWith('cat', 16));
console.log(str.startsWith('best!'));