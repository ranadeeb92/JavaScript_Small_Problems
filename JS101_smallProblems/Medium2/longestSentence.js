// PEDAC
// UNDERSTAND THE PROBLEM:
// Questions:
// 1.
// 2.
// Input:
// -  string
// Output:
// -  string(longest sentence in input string based on the number of words)
// Rules:
// - Explicit requirements:
// -  word is any srquance of charaters that are not spaces or sentence ending charaters(!, ?, .)
// logs the longest sentence and its words count
// each stentence ends with (. or ? or !)
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
//  declare a varibale sentences and assign to it an empty array
//  loop over the input sentence
//    - extract all senteces from input sentance that end with (. , ? , !)
//    - add all extracted sentence to the sentences array
// declare counts array assgin it to empty array
// loop over sentences array
//   - covert current sentence to an array of words
//     - loop over words array
//       - count the number of its words
//       - append words count to counts array
// declare a variable maxCountIndex
//loop over counts array
//  - find the maximun count
//  - save its index in maxCountIndex
//print longest sentence  that has the same index as the maximum count and its words count
// PSEUDOCODE:
//

function longestSentence(text) {
  let longestParagraph = getLongestParagraph(text);
  let longestWord = getTheLongestWord(text);

  // let sentences = [];
  // while (true) {
  //   for (let index = 0; index < text.length; index++) {
  //     if (["!", "?", "."].includes(text[index])) {
  //       let sentence = text.slice(0, index + 1);
  //       sentences.push(sentence);
  //       text = text.slice(index + 2);
  //       break;
  //     }
  //   }
  //   if (text.length === 0) break;
  // }
  let sentences = text.match(/\w.*?[.!?]/g);

  let sentenceWithLongestWord = getSentenceWithLongestWord(
    sentences,
    longestWord
  );
  // let counts = sentences.map((sentence) => {
  //   let sentenceArr = sentence.split(" ");
  //   return sentenceArr.reduce((count, word) => {
  //     return (count += 1);
  //   }, 0);
  // });
  let counts = sentences.map((sentence) => {
    return sentence.trim().split(" ").length;
  });

  let maximumCount = 0;
  counts.forEach((count) => {
    if (maximumCount < count) {
      maximumCount = count;
    }
  });

  console.log(longestParagraph);
  console.log(`${sentenceWithLongestWord} (Longest Word is "${longestWord}")`);
  console.log(sentences[counts.indexOf(maximumCount)]);
  console.log(`The longest sentence has ${maximumCount} words.`);
}

function getLongestParagraph(text) {
  let longest = text.split(/\n/).sort((a, b) => b.length - a.length)[0];
  return longest;
}

function getSentenceWithLongestWord(sentences, longestWord) {
  let index = 0;
  while (index < sentences.length) {
    if (sentences[index].includes(longestWord)) {
      return sentences[index];
    }
    index++;
  }
}

function getTheLongestWord(text) {
  return text.split(" ").reduce((longest, word) => {
    if (longest.length >= word.length) {
      return longest;
    } else {
      return word;
    }
  });
}

let longText =
  "Four score and seven years ago our fathers brought forth on this " +
  "continent a new nation, conceived in liberty, and dedicated to the " +
  "proposition that all men are created equal. Now we are engaged in a " +
  "great civil war, testing whether that nation, or any nation so " +
  "conceived and so dedicated, can long endure. We are met on a great " +
  "battlefield of that war. We have come to dedicate a portion of that " +
  "field, as a final resting place for those who here gave their lives " +
  "that that nation might live. It is altogether fitting and proper that " +
  "we should do this. /n";

let longerText =
  longText +
  "But, in a larger sense, we can not dedicate, we can not consecrate, " +
  "we can not hallow this ground. The brave men, living and dead, who " +
  "struggled here, have consecrated it, far above our poor power to add " +
  "or detract. The world will little note, nor long remember what we say " +
  "here but it can never forget what they did here. It is for us the " +
  "living, rather, to be dedicated here to the unfinished work which " +
  "they who fought here have thus far so nobly advanced. It is rather " +
  "for us to be here dedicated to the great task remaining before us -- " +
  "that from these honored dead we take increased devotion to that " +
  "cause for which they gave the last full measure of devotion -- that " +
  "we here highly resolve that these dead shall not have died in vain " +
  "-- that this nation, under God, shall have a new birth of freedom -- " +
  "and that government of the people, by the people, for the people, " +
  "shall not perish from the earth.";

longestSentence(longText);
// Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.
//
// The longest sentence has 30 words.

longestSentence(longerText);
// It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.
//
// The longest sentence has 86 words.

longestSentence("Where do you think you're going? What's up, Doc?");
// Where do you think you're going?
//
// The longest sentence has 6 words.

longestSentence("To be or not to be! Is that the question?");
