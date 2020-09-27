function staggeredCase(str) {
  let result = "";
  for (let index = 0; index < str.length; index++) {
    if (index % 2 === 0) {
      result += str[index].toUpperCase();
    } else {
      result += str[index].toLowerCase();
    }
  }
  return result;
}
// second solution
function staggeredCase(str) {
  return str
    .split("")
    .map((char, index) => {
      if (index % 2 === 0) return char.toUpperCase();
      return char.toLowerCase();
    })
    .join("");
}

console.log(staggeredCase("I Love Launch School!")); // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase("ALL_CAPS")); // "AlL_CaPs"
console.log(staggeredCase("ignore 77 the 444 numbers")); // "IgNoRe 77 ThE 444 NuMbErS"
