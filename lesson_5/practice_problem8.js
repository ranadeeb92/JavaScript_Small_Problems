// Advanced javascript collections
// Practice problem 8
/*
 * Using the forEach method
 * write some code to output all vowels from the strings in the arrays
 * Don't use a for or while loop.
 */

let obj = {
  first: ["the", "quick"],
  second: ["brown", "fox"],
  third: ["jumped"],
  fourth: ["over", "the", "lazy", "dog"],
};

Object.values(obj).forEach((arr) => {
  arr.forEach((ele) => {
    ele
      .split("")
      .forEach((char) => !"auioe".includes(char) || console.log(char));
  });
});
