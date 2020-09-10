
// PEDAC
// UNDERSTAND THE PROBLEM: 
// 1.
// 2.
// 3.
// Input:
// - strings (4 string)
// Output:
// - string
// Rules:
// - construct a story with blanks
// - ask for four words(noun, verb, adv , adj)
// - inject the words in the story blanks
// - 
// - 
// -
// - 
// Questions: 
// -

// EXAMPLES/TEST CASES:
// i: 
// =>
// o: 
// =>
// MENTAL MODEL: 
// *
// DATA STRUCTURES: 
// ALGORYTHM: 
// build the story with blanks
// prompts to get the words
// fill the blanks
// display the story
// PSEUDOCODE:
// 

const readline = require('readline-sync');

function prompt(msg) {
  console.log(msg);
}

function madlibs (userInput) {
let [noun, verb, adj, adv] = userInput;
let story = `Do you ${verb} your blue ${noun} ${adv}? That's hilarious! \n The ${adj} dog walks quikly over the lazy dog. \n The dog quikly walks up ${adj} Joe's turtle`;
console.log(story);

}

let inputs = [];
prompt("Enter a noun:");
let noun = readline.question();
inputs.push(noun);
prompt("Enter a verb:");
let verb = readline.question();
inputs.push(verb);
prompt("Enter an adj:");
let adj = readline.question();
inputs.push(adj);
prompt("Enter an adv:");
let adv = readline.question();
inputs.push(adv);


madlibs(inputs);