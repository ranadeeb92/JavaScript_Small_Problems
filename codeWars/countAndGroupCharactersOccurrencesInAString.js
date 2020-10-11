// PEDAC
// Input:
// - string
// Output:
// - array of object (each key is number of occurr each charater, value is an array has charaters that has the same occuurence)
// - array sorted depend on object keys
// Rules:
// - Explicit requirements:
// - just count the letters a-z
// - no case sensitives(output all lowercase)
// - Implicit requirements:
// -
// -
// -

// EXAMPLES/TEST CASES:
// i: aaa...bb...c!
// =>
// o: [{3: a}, {2 : b}, {1, c}]
// =>
// DATA STRUCTURES: array , object
// ALGORYTHM:
// count charcters in the input string and save them in object counts
//  loop over counts keys
//    if we have keys have the same values
//      - append this keys to an array
//    add this shared value as a key to a new object with corresponding keys array value
//    sort the array depend on keys
// return array
// PSEUDOCODE:
//

function getCharCount(str) {
  let counts = {};
  for (let index = 0; index < str.length; index++) {
    counts[str[index]] = counts[str[index]] || 0;
    counts[str[index]] += 1;
  }
  console.log(counts);

  let sharedCounts = [];
  let keys = Object.keys(counts);
  for (let index = 0; index < keys.length; index++) {
    let sharedCount = [];
    let sameCount = {};
    let preCount = counts[keys[index]];
    for (let index1 = index + 1; index1 < keys.length; index1++) {
      if (preCount === counts[keys[index1]]) {
        sharedCount.push(keys[index], keys[index1]);
      }
    }
    if (sharedCount.length === 0) {
      sharedCount.push(keys[index]);
    }
    sameCount[preCount] = sameCount[preCount] || sharedCount;
    console.log(sameCount);
    sharedCounts.push(sameCount);
  }
  console.log(sharedCounts);
}

getCharCount("Mississippi");
