// input :  string
// output : string
// rules :
// returns a new string that conatins the original string value with 
// collapes the consecutive duplicated caharacters into a single char.
// if the string in empty returns ""
// if there is no consecutive duplicate characters returns the character.


// Algorithm:
// declare a variable called collapsed_str
// that has the first char in the string
// loop through the input string starting from the second element
// compare collapsed_str last char with the current char 
// if they are not equal concat the current char with collased_str
// else move to next iteration
// return collapsed_str

// function crunch(str) {
//   let collapsed_str = str[0] || '';
//   for(let i = 1; i < str.length; i++) {
//     if(collapsed_str[collapsed_str.length -1] !== str[i]) {
//       collapsed_str += str[i];
//     }
//   }
//   return collapsed_str;
// }

// solve it with regular expression
function crunch(str) {
  return str.replace(/(.)\1+/g, (match) => {
    return match[0];
  } );
}


console.log(crunch('ddaaiillyy ddoouubbllee'));
console.log(crunch('ggggggggg'));
console.log(crunch(''));
console.log(crunch('a'));
console.log(crunch('4444abcabccba'));
