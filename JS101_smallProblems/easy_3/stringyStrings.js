// input = number(positive int)
// output = string of '1' and '0'
// rule:
// length of the output string should equal the input number
// string alwyas start with '1'


// algorithm:
//declare a array  || empty string
// loop over the array 
// add '1' for even indexes
// add '0' for odd indexes
// convert array to string
// return the string


// function stringy(number) {
//   let str = [];
//   for (let i = 0; i <  number; i++) {
//     if(i % 2 === 0) {
//       str.push('1');
//     }else {
//       str.push('0');
//     }
//   }
//  return str.join('');
// }

function stringy(number) {
  let str = "";
  for (let i = 0; i <  number; i++) {
    str += (i % 2 === 0) ? 1 : 0;
  }
 return str;

}

console.log(stringy(6));
console.log(stringy(9));
console.log(stringy(4));
console.log(stringy(7));