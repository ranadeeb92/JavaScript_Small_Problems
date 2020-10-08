// PEDAC
// Input:
// - number(integer > 0)
// Output:
// - string (expanded form of input number)
// Rules:
// - Explicit requirements:
// - expand thee input number
// - build a string
// - Implicit requirements:
// -
// -
// -

// EXAMPLES/TEST CASES:
// i:  42
// =>
// o:  "40 + 2 "
// =>
// DATA STRUCTURES: array
// ALGORYTHM:
//  declare a variable ExpandedNum and initaialized with 0
//  declare a variable iMod and initialezd ith 10
//  start a loop
//    comput input number mod iMod
//    append the result to ExpandedNum array
//    number = subtarct the result from input number
//    multiplay iMod by 10
//  end the loop when number is zero
// loop over the array ExpandedNum
// - if cuurent element > 0 ignore it
// - else append it to a new string
// return new string
// PSEUDOCODE:
//

function expandedForm(num) {
  let ExpandedNum = [];
  let iMod = 10;
  while (num > 0) {
    let result = num % iMod;
    if (result) {
      ExpandedNum.unshift(num % iMod);
      num = num - (num % iMod);
    }
    iMod *= 10;
  }
  return ExpandedNum.reduce((str, num, index) => {
    return index !== ExpandedNum.length - 1
      ? (str += num + " + ")
      : (str += num);
  }, "");
}

console.log(expandedForm(12), "10 + 2");
console.log(expandedForm(42), "40 + 2");
console.log(expandedForm(70304), "70000 + 300 + 4");
