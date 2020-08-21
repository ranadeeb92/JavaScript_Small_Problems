const readline = require("readline-sync");
const MESSAGES = require('./messages.json');
const CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const SHORTENED_CHOICES = CHOICES.map(ele => ele[0]);


const GAME_RULES = {
  scissors : ['paper', 'lizard'],
  paper : ['rock', 'spock'],
  rock : ['lizard', 'scissors'],
  lizard: ['spock', 'paper'],
  spock : ['scissors', 'rock']
};


const prompt = (message) => {
  if (message === 'choice' || message === 'invalidchoice') {
    console.log(`=> ${MESSAGES[message] + CHOICES.join(', ')}`);
  } else {
    console.log(`=> ${MESSAGES[message]}`);
  }
};

const isInvalidChoice = (choice) => {
  return !SHORTENED_CHOICES.includes(choice);
};

const isInvalidAnswer = (answer) => {
  return (answer !== 'yes' && answer !== 'no');
};

const isInvalidSpecialInput = (input) => {
  return (input !== 'sc' && input !== 'sp');
};

const checkSpecialInput = (input) => {
  return input === 's';
};

const compareInput = (input) => {
  switch (input) {
    case 'r' : return  'rock';
    case 'p' : return 'paper';
    case 'l' : return 'lizard';
    case 'sc' : return 'scissors';
    case 'sp' : return 'spock';
    default : return undefined;
  }
};

// function to retrieve input from the user
const retrieveInput = (invalidInput, message) => {
  prompt(message);
  let input = readline.question().toLowerCase();
  while (invalidInput(input)) {
    prompt(`invalid${message}`);
    input = readline.question().toLowerCase();
  }
  return input;
};


const getRandomIndex = (max) => {
  return Math.floor(Math.random() * max);
};

const keepScore = (userScore, computerScore, winner) => {
  switch (winner) {
    case 1 :
      if (userScore < 5) userScore += 1;
      break;
    case 2:
      if (computerScore < 5) computerScore += 1;
      break;
    case 0: break;
  }
  return {userScore : userScore, computerScore : computerScore};
};
/*
    displayTheWinner() returns (1) if the winner is the user,
    (2) if the winner is the computer,
    and returns (0) when no one wins.

*/
const displayTheWinner = (userChoice, computerChoice) => {
  if (GAME_RULES[userChoice].includes(computerChoice)) {
    prompt ('userWins');
    return 1;
  } else if (userChoice === computerChoice) {
    prompt('tie');
    return 0;
  } else {
    prompt('computerWins');
    return 2;
  }
};

const isPlayAgain = (answer) => {
  if (answer[0] === 'y') {
    console.clear();
    return true;
  } else return false;
};


prompt('welcome');
let userAnswer;

do {
  let userScore = 0;
  let computerScore = 0;
  while (true) {
    // retrieve user input
    let userChoice = retrieveInput(isInvalidChoice, 'choice');
    if (checkSpecialInput(userChoice)) {
      userChoice = retrieveInput(isInvalidSpecialInput, 'specialInput');
    }
    // generate computer choice
    let computerChoice = CHOICES[getRandomIndex(CHOICES.length)];
    // print choices on the screen
    console.log(`You chose ${compareInput(userChoice)} \nComputer chose ${computerChoice}`);
    // decide the winner and display it
    let winner = displayTheWinner(compareInput(userChoice), computerChoice);
    ({userScore, computerScore} = keepScore(userScore, computerScore, winner ));
    console.log(`Your score is ${userScore}, Computer score is ${computerScore}`);
    if (userScore === 5 || computerScore === 5) break;
  }
  userAnswer = retrieveInput(isInvalidAnswer, 'playAgain');
} while (isPlayAgain(userAnswer));


//dsfksd
/*
**jsk
*/