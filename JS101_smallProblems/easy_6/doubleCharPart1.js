// input : string
// output: string
// rules:
// double every character in the string
// if the input is an empty string => return empty string

// algorithm:
// 1- declare a variable to hold the new string
// - assign an empty string to it
// 2- build the new string wherr:
// - we double each characters in the input string
// - looping through the input string
// - repeat each character
// 3- return the new string

//VV BETTER VV//

// algorithm:
// 1- declare a variable to hold the new string str
// - assign an empty string to it
// 2- loop through the input string and append each charachter twice to str
// 3- return the new string

// function repeater(str) {
//   let new_str = "";
//   // if (str.length > 0) {
//   for (let ind = 0; ind < str.length; ind++) {
//     new_str += str[ind] + str[ind];
//   }
//   // }
//   return new_str;
// }

function repeater(str) {
  let new_str = "";
  str.split("").forEach((char) => (new_str += char.repeat(2)));
  return new_str;
}

function repeater(str) {
  return str
    .split("")
    .map((char) => char.repeat(2))
    .join("");
}

console.log(repeater("Hello")); // "HHeelllloo"
console.log(repeater("Good job!")); // "GGoooodd  jjoobb!!"
console.log(repeater("")); // ""
