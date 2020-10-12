// PEDAC
// Input:
// -string (uppercase and lowercase)
// Output:
// - string
// Rules:
// - Explicit requirements:
// - Uppercase letters stands for mothers
// - lowercase stand for their children
// - for ex: "A" mother's children are "aaaa".
// - Implicit requirements:
// - for each letter we have one letter uppercase and one or more lowercase
// - A(a,...)B(b,...)...
// -

// EXAMPLES/TEST CASES:
// i:  aAbaBb => AaaBbb
// =>
// o:
// =>
// DATA STRUCTURES: string
// ALGORYTHM:
//  loop over input string
//   for each mother(uppercaseletter)
//     - count how many children(how many lowercase letter we have from the same letter)
//  built a new string from object counts
//    - loop over object counts
//       - newstring += uppercaseLetter followed by its lowercase
//       - append this string to a new array
// sort the array alphabetically => convert it to string
// return the string
// PSEUDOCODE:
//

function findChildren(dancingBrigade) {
  let counts = {};
  for (let index = 0; index < dancingBrigade.length; index++) {
    if (dancingBrigade[index] >= "a" && dancingBrigade[index] <= "z") {
      counts[dancingBrigade[index].toUpperCase()] =
        counts[dancingBrigade[index].toUpperCase()] || 0;
      counts[dancingBrigade[index].toUpperCase()] += 1;
    }
  }
  let arr = Object.keys(counts).map((mother) => {
    return mother + mother.toLowerCase().repeat(counts[mother]);
  });

  return arr.sort().join("");
}

console.log("BbbEeee" == findChildren("beeeEBb"));
console.log("EeeUuuWww" == findChildren("uwwWUueEe"));
