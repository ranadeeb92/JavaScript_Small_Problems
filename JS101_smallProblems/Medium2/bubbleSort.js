// PEDAC
// UNDERSTAND THE PROBLEM:
// Questions:
// 1.
// 2.
// Input:
// - array
// Output:
// - array (sorted by bubble sort algorithm)
// Rules:
// - Explicit requirements:
// -  return the same input array after sorting it
// -  input array has at least two elements
// - bubble sort:
// - make multiple iteration through an array
// - on each iteration : compare two values of two consective elements
// - if first value > second value
//    - swap th elements
//- repeat this process until a complete pass is made without any swaps.
//-  bubble sort algorithms sorts the array elements in ascending order
// - Implicit requirements:
// -
// -
// -

// EXAMPLES/TEST CASES:
// i:
// =>
// o:
// =>
// DATA STRUCTURES:
// ALGORYTHM:
//  declare a varible swap
//  loop over the input array elemnets
//  assign false value to swap varible
//    - if the element[index] > element[index + 1]
//        - swap those elements
//        - reassign true value to swap varaible
// if swap is true repeat the loop
// else return the sorted array
// PSEUDOCODE:
//

function bubbleSort(array) {
  let swap;
  do {
    swap = false;
    for (let index = 0; index < array.length; index++) {
      if (array[index] > array[index + 1]) {
        let swappedElemet = array[index];
        array[index] = array[index + 1];
        array[index + 1] = swappedElemet;
        swap = true;
      }
    }
  } while (swap);

  return array;
}

let array1 = [5, 3];
bubbleSort(array1);
console.log(array1); // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2); // [1, 2, 4, 6, 7]

let array3 = ["Sue", "Pete", "Alice", "Tyler", "Rachel", "Kim", "Bonnie"];
bubbleSort(array3);
console.log(array3);
