// PEDAC
// Input:
// - number (integer > 0)
// Output:
// - number (digital root)
// Rules:
// - Explicit requirements:
// - Digital root is the recursive sum of all the digits in a number.
// - Implicit requirements:
// -
// -
// -

// EXAMPLES/TEST CASES:
// i:  942 => 9+ 4 +2 =>15 => 1 +5 => 6
// =>
// o:
// =>
// DATA STRUCTURES:
// ALGORYTHM:
//  convert the input number to string
//  loop over string of digits
//    - sum += connvert current digit to number
//    - check if sum is a single digit
//       - return the sum
//    - else repeat the loop on the new sum as a input number
// PSEUDOCODE:
//

// function digital_root(n) {
//   let sum = 0;
//   let strn = String(n);
//   for(let index = 0; index < strn.length; index++){
//     sum += Number(strn[index]);
//   }
//   if(sum >= 0 && sum <= 9) return sum;
//   return digital_root(sum);
// }

function digital_root(n) {
  let sum = 0;
  let strn = String(n);
  for (let index = 0; index < strn.length; index++) {
    sum += Number(strn[index]);
  }
  return sum >= 0 && sum <= 9 ? sum : digital_root(sum);
}
console.log(digital_root(16) === 7);
console.log(digital_root(456) === 6);
