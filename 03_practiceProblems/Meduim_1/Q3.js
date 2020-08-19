function factors (number) {
  let divisor = number;
  let factors = [];
  // do {
  //   if (number % divisor === 0) {
  //     factors.push(number / divisor);
  //   }
  //   divisor -= 1;
  // } while (divisor !== 0);
  // return factors;
  while (divisor > 0) {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  }
  return factors;
}


console.log(factors(3));
console.log(factors(0));