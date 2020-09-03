// input :  number
// output : string


// Algo : 
// decalre a variable called str
// declare an object which is str_num_dictionary
// extract the digits from the number and add them to an array
// loop through the array of digits 
// for each iteration convert the digit to string
// compute the final str
// print str

function numbetToString(number) {
  let str;
  let str_num_dic = {
    0 : '0',
    1 : '1',
    2 : '2',
    3 : '3',
    4 : '4',
    5 : '5',
    6 : '6',
    7 : '7',
    8 : '8',
    9 : '9'
  }
  let digit_arr = [];
  if( number === 0) {
    digit_arr.push(number);
  } else{
    while (number > 0) {
      let digit = number % 10;
      digit_arr.push(digit);
      number = Math.floor(number / 10);
    }
  }
  let reversedArr = digit_arr.reverse();

  str = str_num_dic[reversedArr[0]];
  for(let i =1; i < reversedArr.length; i++){
      str += str_num_dic[reversedArr[i]];
    }
  console.log(str);
}


numbetToString(5455);
numbetToString(0);
numbetToString(40000);
numbetToString(55456346346);
