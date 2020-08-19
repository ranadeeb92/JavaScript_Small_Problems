const readline = require("readline-sync");
const messages = require('./mortgage_calc_msg.json');


function prompt(key) {
  console.log(`>> ${messages[key]}`);
}

function isInvalidInput(userInput) {
  return userInput.trim === '' ||
         Number(userInput) < 0 ||
         Number.isNaN(Number(userInput));
}


// Compute tje loan duration in months
function yearsToMonths(years, months) {
  return (Number(years) * 12) + Number(months);
}


// convert the APR to MPR(Monthly Percentage Rate)
function getMonthlyInterestRate(apr) {
  let monthlyInterestRate = (Number(apr) / 100) / 12;
  return monthlyInterestRate;
}

// compute the monthly payment
function getMonthlyPayment(
  loanAmount,
  loanTermInMonths,
  mpr) {
  let monthlyPayment;
  if (mpr === 0) {
    monthlyPayment = Number(loanAmount) / loanTermInMonths;
  } else {
    monthlyPayment =
      loanAmount * (mpr / (1 - Math.pow((1 + mpr), (-loanTermInMonths))));
  }
  return monthlyPayment;
}

const retrieveInput = (invalidInput, promptMsg) => {
  let input;
  prompt(promptMsg);
  input = readline.question().toLowerCase();
  while (invalidInput(input)) {
    prompt(`invalid${promptMsg}`);
    input = readline.question().toLowerCase();
  }
  return input;
};

const isInvalidYesOrNoAnswer = (answer) => {
  return answer !== 'yes' && answer !== 'no';
};

const isDurationYears = (answer) => {
  if (answer[0] === 'y') {
    return true;
  } else  {
    return false;
  }
};

const isPlayAgain = (answer) => {
  if (answer[0] === 'y') {
    return true;
  } else  {
    return false;
  }
};


while (true) {
  prompt('welcome');
  // Ask the user to enter the loan Amount
  let loanAmount = retrieveInput(isInvalidInput, 'loanAmount');
  while (Number(loanAmount) === 0) {
    prompt('zeroLoanAmount');
    loanAmount = retrieveInput(isInvalidInput, 'loanAmount');
  }
  // prompt('loanAmount');
  // let loanAmount = readline.question();
  // while (isInvalidInput(loanAmount)) {
  //   prompt('invalidLoanAmount');
  //   loanAmount = readline.question();
  // }

  // Assk the user to enter the loaan duration in years
  let loanTermMonths = 0;
  let loanTermYears = 0;
  let userAnswer = retrieveInput(isInvalidYesOrNoAnswer, 'answer');
  // prompt('YearsAndMonths');
  // let userAnswer = readline.question().toLowerCase();
  // while (userAnswer !== 'yes' && userAnswer !== 'no') {
  //   prompt('invalidAnswer');
  //   userAnswer = readline.question().toLowerCase();
  // }
  if (isDurationYears(userAnswer)) {
    loanTermYears = retrieveInput(isInvalidInput, "loanYears");
    // prompt('loanTerm');
    // loanTermYears = readline.question();
    // while (isInvalidInput(loanTermYears)) {
    //   prompt('invalidYears');
    //   loanTermYears = readline.question();
    // }
  } else {
    loanTermYears = retrieveInput(isInvalidInput, 'loanYears');
    loanTermMonths = retrieveInput(isInvalidInput, 'loanMonths');
    // prompt('enteryears');
    // loanTermYears = readline.question();
    // while (isInvalidInput(loanTermYears)) {
    //   prompt('invalidYears');
    //   loanTermYears = readline.question();
    // }
    // prompt('enterMonths');
    // loanTermMonths = readline.question();
    // while (isInvalidInput(loanTermMonths) || loanTermMonths > 12) {
    //   prompt('invalidMonths');
    //   loanTermMonths = readline.question();
    // }
  }


  // Ask the user to enter the Anuual Percentage Rate
  let apr = retrieveInput(isInvalidInput, "apr");
  // prompt("apr");
  // let apr = readline.question();
  // while (isInvalidInput(apr)) {
  //   prompt('invalidAPR');
  //   apr = readline.question();
  // }

  let loanTermInMonths = yearsToMonths(loanTermYears, loanTermMonths);
  let mpr = getMonthlyInterestRate(apr);
  let monthlyPayment = getMonthlyPayment(loanAmount, loanTermInMonths, mpr);

  console.log(`Your Monthly payment is ${monthlyPayment.toFixed(2)}`);

  let answer = retrieveInput(isInvalidYesOrNoAnswer, 'playAgain');
  // prompt('anotherRound');
  // let answer = readline.question().toLowerCase();
  // while (answer !== 'yes' && answer !== 'no') {
  //   prompt('invalidAnswer');
  //   answer = readline.question().toLowerCase();
  // }
  if (!isPlayAgain(answer)) break;
}
