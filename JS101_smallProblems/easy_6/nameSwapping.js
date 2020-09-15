// input : string
// output : string
// rules :
// input string consist if firstname space lastname
// output string consist of lastname space firstname

// algorithm:
// convert input string to array conataing string names
// reverse the array
// convert array to string
// return the string

// function swapName(str) {
//   return str.split(" ").reverse().join(", ");
// }

// if the person has one or more middle names

function swapName(str) {
  let strArr = str.split(" ");
  let swapStr =
    strArr[strArr.length - 1] +
    ", " +
    strArr.slice(0, strArr.length - 1).join(" ");
  return swapStr;
}

console.log(swapName("Karl Oskar Henriksson Ragvals")); // "Roberts, Joe"
