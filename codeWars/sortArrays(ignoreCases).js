//Sort the given strings in alphabetical order, case insensitive. For example:
// ["Hello", "there", "I'm", "fine"] --> ["fine", "Hello", "I'm", "there"]
// ["C", "d", "a", "B"]) --> ["a", "B", "C", "d"]

//sortme(["Hello", "there", "I'm", "fine"]) == ["fine", "Hello", "I'm", "there"]
//sortme(["C", "d", "a", "Ba", "be"]) == ["a", "Ba", "be", "C", "d"]
//sortme(["CodeWars"]) == ["CodeWars"]

// PEDAC
// Input:
// - array of strings
// Output:
// - array of strings(sorted alphabetically with ignore letter cases)
// Rules:
// - Explicit requirements:
// -
// - Implicit requirements:
// - array of length equal to 1 => return the same array
// - empty array => return empty array

// EXAMPLES/TEST CASES:
// i:  ["C", "d", "a", "Ba", "be"] =>  "C" < "d" => yes (leave them in this order)
// =>                              => "C" < "a" => no (change their positions) ["a", "d", "C", "Ba", "be"]
//                                  => "a" < "Ba" => yes
//  => "d" < "C" => no =>["a", "C", "d", "Ba", "be"] => "C" < "d" => yes, "C" < "Ba" => no =>["a", "Ba", "d", "C", "be"]
// => "d" < "C" => no => ["a", "Ba", "C", "d", "be"] => "C" < "be" => no => ["a", "Ba", "be", "d", "C"]
// => "d" < "C" => no => ["a", "Ba", "be", "C", "d"]
// o:
// =>
// DATA STRUCTURES:  array
// ALGORYTHM:
// bubble sort (ascending order)
//  start a loop from index 0 until array length
//   - start an inner loop from index2 0 until array length - index -1
//      - compare array[index2] < array[index2 + 1] (both converted to lower case (sort case insensitive))
//         - leave the input array as it
//      - else
//         - swith these elemet positions => array[index2] = array[index2 + 1] and array[index2 + 1] = array[index2]
// return sorted array
// PSEUDOCODE:
//

function sortMe(array) {
  for (let index = 0; index < array.length; index++) {
    for (let index2 = 0; index2 < array.length - index - 1; index2++) {
      if (!(array[index2].toLowerCase() < array[index2 + 1].toLowerCase())) {
        let change = array[index2];
        array[index2] = array[index2 + 1];
        array[index2 + 1] = change;
      }
    }
  }
  return array;
}

function sortMe(array) {
  array.forEach((_, index) => {
    for (let index2 = 0; index2 < array.length - index - 1; index2++) {
      if (!(array[index2].toLowerCase() < array[index2 + 1].toLowerCase())) {
        let change = array[index2];
        array[index2] = array[index2 + 1];
        array[index2 + 1] = change;
      }
    }
  });
  return array;
}

console.log(sortMe(["Hello", "there", "I'm", "fine"])); //==> ["fine", "Hello", "I'm", "there"]
console.log(sortMe(["C", "d", "a", "Ba", "be"])); //==> ["a", "Ba", "be", "C", "d"]
console.log(sortMe(["CodeWars"])); //==> ["CodeWars"]
