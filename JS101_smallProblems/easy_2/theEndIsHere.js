// input : string (at least two characters)
// output : string (the next to last word in the string)
// rules: 
//explicit rules:  
  // word is a sequance of non-block characters
  // non-block characters
// implicit rules:
  // if the input string is empty string or consists of one word  
  //returns ''

// algo :
//check if the input string is empty 
// return ''
// else
// convert the input string to an array each elemant of it is a word
// if the array length > 1
// return the next to last element of the array
// else return ''


function nearButNotHere(str) {
  if(str.length === 0){
    return '';
  } else {
    let words = str.split(' ');
    if(words.length === 1) return '';
    return  words[words.length - 2];
  }
}

// console.log(nearButNotHere('last'));
// console.log(nearButNotHere(''));
// console.log(nearButNotHere('last word'));
// console.log(nearButNotHere('Launch school is great!'));

// function to return the middle word of a phrase or sentence
// with handling the edg cases
function getTheMiddle(str) {
  if(str.length > 0) {
    let words = str.split(" ");
    if(words.length > 1 && words.length % 2 === 1) {
      return words[Math.floor(words.length / 2)];
    } else {
      // string has 1 or 2 words
      return `this string consists of ${words.length} words, there is no middle word`;
    }
  } else {
    // empty string
    return 'it is an empty string';
  }
}

console.log(getTheMiddle('last'));
console.log(getTheMiddle(''));
console.log(getTheMiddle('last word'));
console.log(getTheMiddle('Launch school is great!'));
console.log(getTheMiddle('Launch school is great school'));
console.log(getTheMiddle('Launch school is great school and wow'));




////
function getTheMiddle(str) {
  if(str.length == 0) { return 'it is an empty string'; }
  let words = str.split(" ");
  if(words.length > 1 && words.length % 2 === 1) {
    return words[Math.floor(words.length / 2)];
  }
  return `this string consists of ${words.length} words, there is no middle word`;  
}
