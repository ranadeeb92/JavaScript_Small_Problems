// input : string
// output : number

// ALgorithm:
// declare a number varaible
//declare a dictionary object that contains the number value as a key
// and the also the number value as a value Like '0' : 0 
// loop over the input string
// for each iteration check the charater value if equals any of the object keys
// compute the number
// return the number

function strToInteger(str) {
  let number;
  let num_dictionary = {
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

  for (let index = 0; index < str.length; index++) {
    if(num_dictionary[str[index]] !== undefined) {
      number = number || 0;
      number = (number * 10) + num_dictionary[str[index]];
    }
  }
  return number;
}

console.log(strToInteger('5454'));

// HexadecimalToInteger()
function hexaToDecimal(str) {
  let number;
  let hexa_num_dictionary = {
    0 : 0,
    1 : 1,
    2 : 2,
    3 : 3,
    4 : 4,
    5 : 5,
    6 : 6,
    7 : 7,
    8 : 8,
    9 : 9,
    A : 10,
    B : 11,
    C : 12,
    D : 13,
    E : 14,
    F : 15
  }

  for(let i = 0; i < str.length; i++) {
    if(hexa_num_dictionary[str[i]] !== undefined) {
      number = number || 0;
      number = (number * 16) + hexa_num_dictionary[str[i]];
    }
  }
  return number;
}

console.log(hexaToInt('4D9F'));
