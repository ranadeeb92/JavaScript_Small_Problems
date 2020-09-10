// input : number
// output : string
// rules:
// - ask the user about his age
// - ask the user at what age he woulf like to retire
// - log when the user will retire (which year)
// - log how many more years the user has to work until retirement

// algo :
// Ask the user to enter his age and what age he would like to retire
// compute how many years still has to work
// compute the reteirement year
//  -current year + work to go years
// disply current year and  reteirement year
// disply work to go years

const readline = require("readline-sync");

function prompt(msg) {
  console.log(msg);
}

prompt("What is your age?");
let userAge = Number(readline.question());

prompt("At what age would you like to retire?");
let retirementAge = Number(readline.question());

let workYearsToGo = retirementAge - userAge;
let currentYear = new Date().getFullYear();
prompt(
  `It's ${currentYear}. You will retire in ${currentYear + workYearsToGo}`
);
prompt(`You have only ${workYearsToGo} years of work to go!`);
