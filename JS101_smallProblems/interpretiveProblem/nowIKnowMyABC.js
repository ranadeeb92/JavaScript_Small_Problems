// A collection of spelling blocks has two letters per block, as shown in this list:

// B:O   X:K   D:Q   C:P   N:A
// ["G", "T"]   ["R", "E"]   ["F", "S"]   ["J", "W"]   ["H", "U"]
// ["V", "I"], ["L", "Y"], ["Z", "M"]

// This limits the words you can spell with the blocks to only those words that do not use both letters from any given block. You can also only use each block once.

// Write a function that takes a word string as an argument, and returns true if the word can be spelled using the set of blocks, or false otherwise. You can consider the letters to be case-insensitive when you apply the rules.

// isBlockWord('BATCH');      // true
// isBlockWord('BUTCH');      // false
// isBlockWord('jest');       // true

// PEDAC
// Input:
// - string ( a word)
// Output:
// - boolean
// Rules:
// - Explicit requirements:
// -  cas insensitive
// - you can spell word that do not use both letters from any given block
// - You can also only use each block once
// - Implicit requirements:
// -
// -
// -

// EXAMPLES/TEST CASES:
// i:  batch => [b, o] has b, [n, a] has a, [g, t] has t, [h, u] has h, [c, p] has c
// =>
// o:
// =>
// DATA STRUCTURES:
// ALGORYTHM:
// declare an empty object called spell
// loop over input word letters
//  check in which block this letter exist
//    - add spell block index and its value increment by one
//
// PSEUDOCODE:
//

function isBlockWord(word) {
  let blocks = [
    ["B", "O"],
    ["X", "K"],
    ["D", "Q"],
    ["C", "P"],
    ["N", "A"],
    ["G", "T"],
    ["R", "E"],
    ["F", "S"],
    ["J", "W"],
    ["H", "U"],
    ["V", "I"],
    ["L", "Y"],
    ["Z", "M"],
  ];

  let spell = {};
  for (let index = 0; index < word.length; index++) {
    for (let idx = 0; idx < blocks.length; idx++) {
      if (blocks[idx].includes(word[index].toUpperCase())) {
        spell[idx] = spell[idx] || 0;
        spell[idx] += 1;
        break;
      }
    }
  }

  return (
    Object.values(spell).every((value) => value === 1) &&
    Object.keys(spell).length === word.length
  );
}

console.log(isBlockWord("jest"));
