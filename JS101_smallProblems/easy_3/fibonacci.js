// input: number >= 2 (number of digits of fibonacci number)
// output: number (index of the first  fibonacci number)
//rule :
// the first fibonacci number has an index of 1
// first two numbers are 1
// each subsequant number is the sum of the twi previous numbers

// algo:
//build fibonacci seris
// loop over it to find the first number that consist of the number of argument digit
// return its index



// function findFibonacciIndexByLength(len) {
//   let ser = {
//     1 : 1,
//     2 : 1
//   }
//   for (let i = 3; i < 100; i++) {
//     ser[i] = ser[i - 1] + ser[i - 2];
//   }

//   for(let i in ser) {
//     if(ser[i].toString.length === len)
//     return Number(i);
//   }
// }

// function findFibonacciIndexByLength(len) {
//   let first_fibo = 1;
//   let second_fibo = 1;
//   let index = 2;
//   let current_fibo;

//   do {
//     current_fibo = first_fibo + second_fibo;
//     index += 1;
//     first_fibo = second_fibo;
//     second_fibo = current_fibo; 
//   } while (String(current_fibo).length < len)
//   return index;
// }


function findFibonacciIndexByLength(len) {
  let first_fibo = 1;
  let second_fibo = 1;
  let index = 2;
  let current_fibo;

  do {
    current_fibo = first_fibo + second_fibo;
    if(current_fibo === second_fibo) {
      console.log("Error");
      break;
    }
    index += 1;
    first_fibo = second_fibo;
    second_fibo = current_fibo; 
  } while (String(current_fibo).length < len)
  return index;
}


console.log(findFibonacciIndexByLength(100));