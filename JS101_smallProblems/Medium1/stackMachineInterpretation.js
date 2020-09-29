// PEDAC
// UNDERSTAND THE PROBLEM:
// Questions:
// 1.
// 2.
// Input:
// -  program (string)
// Output:
// -  depands on the  program
// Rules:
// - Explicit requirements:
// n : Place a value, n, in the register. Do not modify the stack.
// PUSH : Push the register value onto the stack. Leave the value in the register.
// ADD : Pop a value from the stack and add it to the register value, storing the result in the register.
// SUB : Pop a value from the stack and subtract it from the register value, storing the result in the register.
// MULT : Pop a value from the stack and multiply it by the register value, storing the result in the register.
// DIV : Pop a value from the stack and divide it into the register value, storing the integer result in the register.
// MOD : Pop a value from the stack and divide it into the register value, storing the integer remainder of the division in the register.
// POP : Remove the topmost item from the stack and place it in the register.
// PRINT : Print the register value.
// - Implicit requirements:
// -
// -
// -

// EXAMPLES/TEST CASES:
// i:
// =>
// o:
// =>
// DATA STRUCTURES:
// ALGORYTHM:
//
//
//
//
// PSEUDOCODE:
//

const VALID_COMMANDS = [
  "PUSH",
  "ADD",
  "SUB",
  "MULT",
  "DIV",
  "MOD",
  "POP",
  "PRINT",
];

let error = "";

function minilang(program) {
  let register = 0;
  let stack = [];
  // convert program string to array of commands
  let commands = program.split(" ");

  for (let index = 0; index < commands.length; index++) {
    if (checkErrors(commands[index], stack)) {
      console.log(error);
    }
    switch (commands[index]) {
      case "PUSH":
        stack = PushRagisterValToStack(stack, register);
        break;
      case "ADD":
        register = addStackTopValToRegisterVal(stack, register);
        break;
      case "SUB":
        register = subtractStackTopValFromRegisterVal(stack, register);
        break;
      case "MULT":
        register = multiplyStackTopValWithRegisterVal(stack, register);
        break;
      case "DIV":
        register = dividStackTopValIntoRegisterVal(stack, register);
        break;
      case "MOD":
        register = StackTopValModRegisterVal(stack, register);
        break;
      case "POP":
        register = removeStackTopValAndPutItInRegister(stack, register);
        break;
      case "PRINT":
        printRegisterVal(register);
        break;
      default:
        register = placeValueInRegister(Number(commands[index]), register);
    }
  }
}

function checkErrors(command, stack) {
  if (
    stack.length === 0 &&
    ["ADD", "SUB", "MULT", "DIV", "MOD", "POP"].includes(command)
  ) {
    error = new Error(
      `Empty stack, ${command} can not be done on empty stack!`
    );
    return true;
  } else if (
    VALID_COMMANDS.includes(command) ||
    Number.isInteger(Number(command))
  ) {
    return false;
  } else {
    error = new Error(`${command} Invalid command!`);
    return true;
  }
}

function placeValueInRegister(value, register) {
  register = value;
  return register;
}

function printRegisterVal(registerValue) {
  console.log(registerValue);
}

function removeStackTopValAndPutItInRegister(stack, register) {
  register = stack.pop();
  return register;
}

function PushRagisterValToStack(stack, register) {
  stack.push(register);
  return stack;
}
function addStackTopValToRegisterVal(stack, register) {
  register = register + stack.pop();
  return register;
}

function subtractStackTopValFromRegisterVal(stack, register) {
  register = register - stack.pop();
  return register;
}

function multiplyStackTopValWithRegisterVal(stack, register) {
  register = register * stack.pop();
  return register;
}

function dividStackTopValIntoRegisterVal(stack, register) {
  register = Math.floor(register / stack.pop());
  return register;
}

function StackTopValModRegisterVal(stack, register) {
  register = Math.floor(register % stack.pop());
  return register;
}

minilang("ADD");
// 0

minilang("PRINT");
// 0

minilang("5 PUSH 3 MULT PRINT");
// 15

minilang("AeDD");
// 0

minilang("5 PRINT PUSH 3 PRINT ADD PRINT");
// 5
// 3
// 8

minilang("5 PUSH POP PRINT");
// 5

minilang("3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT");
// 5
// 10
// 4
// 7

minilang("3 PUSH PUSH 8 DIV MULT PRINT");
// 6

minilang("4 PUSH PUSH 7 MOD MULT PRINT");
// 12

minilang("-3 PUSH 5 SUB PRINT");
// 8

minilang("6 PUSH");
// //(nothing is printed because the `program` argument has no `PRINT` commands)
