// PEDAC
// Input:
// - string (string of digits)
// Output:
// - number (the greatest product of five conscutive digits)
// Rules:
// - Explicit requirements:
// - input string length > 5
// - Implicit requirements:
// -
// -
// -

// EXAMPLES/TEST CASES:
// i:  123834539327238239583, 12383, 23834 , 38353 ....
// =>
// o:
// =>
// DATA STRUCTURES:
// ALGORYTHM:
//  extract all substring from input string that has five conscutive characters
//  loop over substrings array
//    - for each substring number => product all its digits
//    - add the result to anew array
//  return the max product from new array
// PSEUDOCODE:
//
function greatestProduct(input) {
  let subStrings = [];
  for (let index = 0; index < input.length; index++) {
    let subString = input.slice(index, index + 5);
    if (subString.length === 5) {
      subStrings.push(subString);
    }
  }

  let greatestProduct = 0;
  subStrings.forEach((subString) => {
    let product = 1;
    for (let index = 0; index < subString.length; index++) {
      product *= Number(subString[index]);
    }
    greatestProduct = product > greatestProduct ? product : greatestProduct;
  });
  return greatestProduct;
}

console.log(greatestProduct("1238345") === 1440);
console.log(greatestProduct("123834539327238239583") === 3240);
console.log(greatestProduct("92494737828244222221111111532909999") === 5292);
console.log(greatestProduct("92494737828244222221111111532909999") === 5292);
console.log(greatestProduct("92494737828244222221111111532909999") === 5292);
console.log(greatestProduct("02494037820244202221011110532909999") === 0);
