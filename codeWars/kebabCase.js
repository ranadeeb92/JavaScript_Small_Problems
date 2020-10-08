// PEDAC
// Input:
// - string in camelCase format
// Output:
// - string in kebab case format
// Rules:
// - Explicit requirements:
// - kebab case format is to convert all letters to lowercase
// -  also there is - between two words
// - and there is no numbers
// - Implicit requirements:
// -
// -
// -

// EXAMPLES/TEST CASES:
// i:  myCamel3Case => my-camel-case
// =>
// o:
// =>
// DATA STRUCTURES:
// ALGORYTHM:
//  loop over the input string
//    - if current character is capital
//        - convert it tp lowercase and append it to a new string with - before it
//   - else append it to a new string as it
// return new string
// PSEUDOCODE:
//

// function kebabize(str) {
//   let kekabStr = "";
//   for(let index = 0; index < str.length; index++){
//     if(str[index] >= "A" && str[index] <= "Z"){
//       kekabStr += "-" + str[index].toLowerCase();
//     }else if(str[index] >= "0" && str[index] <= "9"){
//       kekabStr += "";
//     }else {
//       kekabStr += str[index];
//     }
//   }
//   return kekabStr;
// }

function kebabize(str) {
  return str.replace(/[A-Z0-9]/g, replacer);
  function replacer(match) {
    if (match >= 0 && match <= 9) {
      return "";
    } else {
      return `-${match.toLowerCase()}`;
    }
  }
}

console.log(kebabize("myCamelCasedString"), "my-camel-cased-string");
console.log(kebabize("myCamelHas3Humps"), "my-camel-has-humps");
