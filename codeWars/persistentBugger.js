// PEDAC
// Input:
// - number (positive)
// Output:
// - number (multiplicative persistence)
// Rules:
// - Explicit requirements:
// -   multiplicative persistence : it is a number of times you must multiply the digits in number
//-                                 until you reach a single digit
// - Implicit requirements:
// -  if input number is a single digit => return 0
// -
// -

// EXAMPLES/TEST CASES:
// i: 39 =>3*9 = 27 => 2*7 => 14 => 1*4 = 4
// =>
// o:  3
// =>
// DATA STRUCTURES:
// ALGORYTHM:
// if input number is a single number => return 0
// else
//   - declare a varaible count = 0
//   - convert input number to a string of digits
//   - loop over this string
//     => multiply those digits => increment count by one
//     => check if the result is asingle number => stop the loop
// return count
// PSEUDOCODE:
//

// function persistence(num) {
//   if(isSingleNum(num)) return 0;
//   let count = 0;
//   while(true){
//     let result = String(num).split("").reduce((mul,digit)=> {return mul *= Number(digit)}, 1);
//     count += 1;
//     num = result;
//     if(isSingleNum(num)) break;
//   }
//   return count;
// }

function persistence(num) {
  if (isSingleNum(num)) return 0;
  let count = 0;
  while (String(num).length > 1) {
    let mul = 1;
    for (let index = 0; index < String(num).length; index++) {
      mul *= Number(String(num)[index]);
    }
    num = mul;
    count += 1;
  }
  return count;
}

function isSingleNum(num) {
  return num >= 0 && num <= 9;
}

console.log(persistence(39), 3);
console.log(persistence(4), 0);
console.log(persistence(25), 2);
console.log(persistence(999), 4);
