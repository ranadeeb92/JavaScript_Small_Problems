// input : string
// output : boolean
// rules:
// return true if all parenthese in the input string are balanced
// that means for each open parenthesis there is a closed parenthesis
// else return false
// no parentheses in thr string return true

// algo:
// declare a variable to count the number of opened parentheses.
// loop over the string and check if there is a parenthese in it
//  //if it is check if the parenthese occur in matching '(' ')' pairs.
//    // if the current character is '(' increment count by one.
//    //if the current character is ')' check the count if not equal to zero
//      // decrement the count by one.
//    //else return false
// when loop ends check the count if equal 0 return true, otherwise false
// else return true

function isBalanced(str) {
  let countOpenParenthsis = 0;
  if (str.includes("(") || str.includes(")")) {
    for (let index = 0; index < str.length; index++) {
      if (str[index] === "(") {
        countOpenParenthsis += 1;
      }
      if (str[index] === ")") {
        if (countOpenParenthsis > 0) {
          countOpenParenthsis -= 1;
        } else {
          return false;
        }
      }
    }
    return countOpenParenthsis === 0;
  } else {
    return true;
  }
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);
