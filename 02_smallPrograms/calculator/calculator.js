// Ask the user for the first number
// Ask the user for the second number
// Ask the user for an operation to perform
// Perform the operation on the two numbers
// Print the result to the terminal

const readline = require("readline-sync");
const messages = require("./calculator_messages.json");

//console.log(JSON.stringify(messages.messages.greeting));

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

let agree = "y";
let language = "English";

prompt("Select 1)English or 2)French");
let selectedlanguage = readline.question();

if (selectedlanguage === '1') {
  language = "English";
} else {
  language = "Frensh";
}
prompt(`${messages[language].greeting}`);

while (agree[0].toLowerCase() === 'y') {
  prompt(`${messages[language].get_first_number}`);
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(`${messages[language].get_valid_number}`);
    number1 = readline.question();
  }

  prompt(`${messages[language].get_second_number}`);
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(`${messages[language].get_valid_number}`);
    number2 = readline.question();
  }

  prompt(`${messages[language].get_operation}`);
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(`${messages[language].get_valid_opertion}`);
    operation = readline.question();
  }

  let output;
  //Switch statment
  switch (operation) {
    case "1" :
      output = Number(number1) + Number(number2);
      break;
    case "2" :
      output = Number(number1) - Number(number2);
      break;
    case "3" :
      output = Number(number1) * Number(number2);
      break;
    case "4":
      output = Number(number1) / Number(number2);
      break;
  }

  console.log(`The result is ${output}`);
  prompt(`${messages[language].get_agreement_for_next_calc}`);
  agree = readline.question();
}


