// input :  a number
// output : a square number
// rules: 
  // define a function that call multiply function to compute the saquare of its argument


// algo :
//  function square(param){} 
//  decalers a varaible called sqaure
//  computes the square of its argument 
//  returns sqaure

// computes the square of its argument :
 // using multiply function which takes two arguments and returns the result of multiplying them
 // in our case the two arguments are the same of square() argument

 let multiply = (num1, num2) => num1 * num2;

 function sqaure(num) {
   let sqaure = multiply(num, num);
   return sqaure;
 }

 //console.log(sqaure(2));
 //console.log(sqaure(4));

//If we want to generalize this function to a "power to the n"

function power_To_N(num, n) {
  let i = 1;
  let result = multiply(num, num);
    while(i < n -1) {
      result *= num;
      i++;
    }
    return result;
}

console.log(power_To_N(2,1));
console.log(power_To_N(2,3));
console.log(power_To_N(2,4));
console.log(power_To_N(4,2));
console.log(power_To_N(5,4));




function power_To_N(num, n) {
  if(n===0) return 1;
  let i = 1;
  let result = num;
    while(i < n) {
      result = multiply(result, num);
      i++;
    }
    return result;
}