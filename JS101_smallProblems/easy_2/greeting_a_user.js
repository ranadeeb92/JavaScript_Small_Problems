// input : a string (user name)
// output : a string (a greeting masg)
// rules :
  // Ask the user for his name
  // checkfrom user input if has '!' 
  // greet the user


// Algorithm:
// Ask user for his name and keep it in a varaible called `username`
// create a function greeting() that take the user input as an argument and
// check if user input has an '!' in the end.
// display a greeting msg with yelling back to the user:
//  'Hello [user_name]. Why are we screaming?'
// else 
// display a greeting msg formed as 'Hello [user_name]'




let readline = require('readline-sync');
let username = readline.question('What is your name?');

function greeting(name) {
  if(name[name.length - 1] === '!') {
    name = name.slice(0, -1);
    console.log(`Hello ${name}. Why are we screaming?`);
  } else {
    console.log(`Hello ${name}`);
  }
}

greeting(username);