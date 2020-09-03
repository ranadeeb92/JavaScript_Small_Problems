// input : number
// output : string

//Algorhtim:
//check from the number if it is(positive/ negative)
// convert number to str
// return str


function signedNumToStr(number) {
  switch (Math.sign(number)) {
    case 1 : 
      return '+' + numbetToString(Math.abs(number));
    case -1:
      return '-' + numbetToString(Math.abs(number));
    case -0:
      return '-' + numbetToString(Math.abs(number));
    case +0:
      return '+' +numbetToString(Math.abs(number));
  }
}

function numbetToString(number) {
  let str= '';
  let digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  do {
    digit = number % 10;
    number = Math.floor(number / 10);
    str = digits[digit] + str;
  }while (number > 0)

  return str;
}

console.log(signedNumToStr(8765));
console.log(signedNumToStr(0));
console.log(signedNumToStr(-8765));