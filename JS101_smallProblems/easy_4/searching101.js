// input : numbers
// output : string
// rules:
// ask the user to enter six numbers
// the sixth eithe appears amongst the first five numbers or not

// algo:
// Ask user to enter six numbers (on at time)
//  - define a prompt function
//  - use readline-sync
// check if the sixth number appears amongest the previouse numbers
// return message descible if it is or not

const readline = require("readline-sync");

function prompt(msg) {
  console.log(msg);
}

let arr_numbers = [];

for (let i = 1; i < 6; i++) {
  prompt(`Enter the ${i}st number :`);
  arr_numbers.push(Number(readline.question()));
}
// get the last number
prompt("Eneter the last number:");
let lastNumber = Number(readline.question());

// search for a specific number
// if (arr_numbers.includes(lastNumber)) {
//   prompt(`The number ${lastNumber} appears in ${arr_numbers.join(",")}`);
// } else {
//   prompt(
//     `The number ${lastNumber} does not appear in ${arr_numbers.join(",")}`
//   );
// }

// search for a number that satisfies some condition
if (arr_numbers.some((num) => num > lastNumber)) {
  prompt(
    `Some of the ${arr_numbers.join(",")} numbers greater than ${lastNumber} `
  );
} else {
  prompt(
    `None of the ${arr_numbers.join(",")} numbers greater than ${lastNumber} `
  );
}
