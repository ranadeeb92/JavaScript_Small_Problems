// PEDAC
// Input:
// - string(upper case letters and its length does not exceed 200 characters)
// Output:
// - string
// Rules:
// - Explicit requirements:
// - song consists of some number of words that do not contain WUB
// - to make dubstep remix =>insert a certain numbers(maybe 0) of words "WUB" before the first word of the song
// - insert a certain numbers(maybe 0) of words "WUB" after the last word of the song
// - insert a certain numbers(at least one) between words "WUB"
// - glues together all the words in one string
// -

// - Implicit requirements:
// -
// -
// -

// EXAMPLES/TEST CASES:
// i: "WUBWUBIWUBAMWUBWUBX"
// =>
// o:  "I AM X"
// =>
// DATA STRUCTURES:
// ALGORYTHM:
// replace each WUB word with  space " "
// loop over the new string
//   when I found first character
//    - new string start from this character
//   if i did not found any other "WUB" stop on the last character founded
// return new String
// PSEUDOCODE:
//
// function songDecoder(song){
//   song = song.replace(/WUB/g, " ");
//   for(let index = 0; index < song.length; index++){
//     if(song[index] >= "A" && song[index] <= "Z"){
//       song = song.slice(index);
//       break;
//     }
//   }

//     for(let index = song.length - 1; index >= 0; index--){
//     if(song[index] >= "A" && song[index] <= "Z"){
//       song = song.slice(0, index + 1);
//       break;
//     }
//   }
//   return song.replace(/\s+/g, " ");
// }

function songDecoder(song) {
  return song.replace(/(WUB)+/g, " ").trim();
}

console.log(
  songDecoder("AWUBBWUBC"),
  "A B C",
  "WUB should be replaced by 1 space"
);
console.log(
  songDecoder("AWUBWUBWUBBWUBWUBWUBC"),
  "A B C",
  "multiples WUB should be replaced by only 1 space"
);
console.log(
  songDecoder("WUBAWUBBWUBCWUB"),
  "A B C",
  "heading or trailing spaces should be removed"
);
