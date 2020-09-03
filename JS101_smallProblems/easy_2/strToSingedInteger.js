// input : string
// output : signed integer number
// rules :
// if the input started with + returns positive integer number
// if the input started with - returns negative integer number
// if the input does not start with any signed return a positive integer number

// Alogorithm
// declare a varaible called number.
// check from the first character in the input string(+ , -, or non of them)
// convert the input string to integer number
// comput signed integere number and assigned to number variable
// return number;

function strToSignedInteger(str) {
  let number;
  if(str[0] === '-'){
    number = -strToInteger(str.slice(1));
  }else if(str[0] === '+') {
    number = +strToInteger(str.slice(1));
  } else {
    number = +strToInteger(str);
  }

  return number;
}


function strToInteger(str) {
  let number;
  let num_dic = {
    0 : 0,
    1 : 1,
    2 : 2,
    3 : 3,
    4 : 4,
    5 : 5,
    6 : 6,
    7 : 7,
    8 : 8,
    9 : 9
  }

  for(let i = 0; i < str.length; i++) {
    number = number || 0;
    number = (number*10) + num_dic[str[i]];
  }
  return number;
}


console.log(strToSignedInteger("+76574"));
console.log(strToSignedInteger("-76574"));
console.log(strToSignedInteger("+76574"));