// PEDAC
// Input:
// -two arrays
// Output:
// - array of difference
// Rules:
// - Explicit requirements:
// -
// - Implicit requirements:
// - if the first array is empty return []
// - if the second array is empty return first array
// - else return the difference between them

// EXAMPLES/TEST CASES:
// i:  [1, 2] [1] =>1 exist in [1, 2] and 1 exist in [1] => reomove 1 from both arrays => return [2]
// =>  [1,2,2,2,3],[2] => 1 not in b => add it to a n ew array
//                     => 2 in b => ignore it
//                     => 3 not in b => add it to a n ew array
//                    => return [1, 3]
// o:
// =>
// DATA STRUCTURES: arrays
// ALGORYTHM:
//  check if first array is empty => return empty array
//  check if second array is empty => return first array
//  else
//   - loop over the first array
//      - for each element check if this element is exitin the second array
//         - ignore this element
//      - else
//         - append this element to a new array
// return new array
// PSEUDOCODE:
//

function arrayDiff(a, b) {
  if (a.length === 0 || b.length === 0) return a;
  return a.filter((num) => !b.includes(num));
}

console.log(arrayDiff([], [4, 5])); //=> [], "a was [], b was [4,5]");
console.log(arrayDiff([3, 4], [3])); //=> [4], "a was [3,4], b was [3]");
console.log(arrayDiff([1, 8, 2], [])); //=> [1,8,2], "a was [1,8,2], b was []");
