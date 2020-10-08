// PEDAC
// Input:
// - string (url)
// Output:
// - string(domain name)
// Rules:
// - Explicit requirements:
// -
// - Implicit requirements:
// -   domain name usually comes after www. or directlly after //
// -   domin names end with .
// -   url may start with http:// or http://www. or https:// or https://www. or www.

// EXAMPLES/TEST CASES:
// i:
// =>
// o:
// =>
// DATA STRUCTURES:
// ALGORYTHM:
//  create an array of all url prefixes [ http://, http://www., https://, https://www., www.]
//  loop over the prefixes
//    - if any of these prefixes match with input url
//      - get the index of the matched prefix last character
//  cut the string url from that indx + 1
//  loop over the cuted string url
//     - if current chararter equal dot
//      - break the loop
//     - else append current character to a new string
//  return new string
//
// PSEUDOCODE:
//

function domainName(url) {
  let urlPrefixes = [
    "http://",
    "http://www.",
    "https://",
    "https://www.",
    "www.",
  ];
  let matche = [];

  for (let index = 0; index < urlPrefixes.length; index++) {
    matche = url.match(urlPrefixes[index]);
    if (matche) break;
  }

  let domainStart = matche[0].length;
  let urlWithOutPrefix = url.slice(domainStart);
  let domainName = "";
  for (let index = 0; index < urlWithOutPrefix.length; index++) {
    if (urlWithOutPrefix[index] === ".") {
      break;
    }
    domainName += urlWithOutPrefix[index];
  }

  return domainName;
}

console.log(domainName("http://google.com") === "google");
console.log(domainName("http://google.co.jp") === "google");
console.log(domainName("www.xakep.ru") === "xakep");
console.log(domainName("https://youtube.com") === "youtube");
