const readline = require("readline-sync");
const messages = require('./mortgage_calc_msg.json');


function prompt(key) {
  console.log(`>> ${messages[key]}`);
}

function isInvalidInput(userInput) {
  return userInput.trim === '' ||
         Number(userInput) < 0 ||
         Number.isNaN(Number(userInput)) ||
         !Number.isInteger(Number(userInput));
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

while (true) {
  prompt('welcome');
  // Ask the user to enter the loan Amount
  prompt('loanAmount');
  let loanAmount = readline.question();
  while (isInvalidInput(loanAmount)) {
    prompt('invalidLoanAmount');
    loanAmount = readline.question();
  }
  // Assk the user to enter the loaan duration in years
  let loanTermMonths = 0;
  let loanTermYears = 0;
  prompt('YearsAndMonths');
  let userAnswer = readline.question().toLowerCase();
  if (userAnswer[0] === "y") {
    prompt('loanTerm');
    loanTermYears = readline.question();
    while (isInvalidInput(loanTermYears)) {
      prompt('invalidYears');
      loanTermYears = readline.question();
    }
  } else if (userAnswer[0] === 'n') {
    prompt('enteryears');
    loanTermYears = readline.question();
    while (isInvalidInput(loanTermYears)) {
      prompt('invalidYears');
      loanTermYears = readline.question();
    }
    prompt('enterMonths');
    loanTermMonths = readline.question();
    while (isInvalidInput(loanTermMonths) || loanTermMonths > 12) {
      prompt('invalidMonths');
      loanTermMonths = readline.question();
    }
  }

  // Ask the user to enter the Anuual Percentage Rate
  prompt("apr");
  let apr = readline.question();
  while (isInvalidInput(apr)) {
    prompt('invalidAPR');
    apr = readline.question();
  }

  let loanTermInMonths = yearsToMonths(loanTermYears, loanTermMonths);
  let mpr = getMonthlyInterestRate(apr);
  let monthlyPayment = getMonthlyPayment(loanAmount, loanTermInMonths, mpr);

  console.log(`Your Monthly payment is ${monthlyPayment.toFixed(2)}`);

  prompt('anotherRound');
  let answer = readline.question().toLowerCase();
  while (answer !== 'yes' && answer !== 'no') {
    prompt('invalidAnswer');
    answer = readline.question().toLowerCase();
  }
  if (answer[0] === 'n') break;
}
