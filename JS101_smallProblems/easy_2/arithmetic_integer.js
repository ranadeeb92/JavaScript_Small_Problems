// input : two positive integers
// output : print the result of these operations on the inputs(+, -, *, /, %, **) 
// rules:
  // take the user inputs
  // print the result of appling arithmatic operations on the input

// algo :
// define a function called display to display a msg on console in apropriate format
// Ake user for two positive integer
// keep user input in two varaibles num1, num2
// apply arithmetic operations on them and display the result

let readline = require('readline-sync');

 function display(msg) {
   console.log(`==> ${msg}`);
 }

display('Enter the first number:');
let input1 = Number(readline.question());
display('Enter the second number:');
let input2 = Number(readline.question());

display(`${input1} + ${input2} = ${input1 + input2}`);
display(`${input1} - ${input2} = ${input1 - input2}`);
display(`${input1} * ${input2} = ${input1 * input2}`);
display(`${input1} / ${input2} = ${input1 / input2}`);
display(`${input1} % ${input2} = ${input1 % input2}`);
display(`${input1} ** ${input2} = ${input1 ** input2}`);
