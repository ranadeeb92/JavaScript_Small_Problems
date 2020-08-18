// Advanced javascript collections
// Practice problem 5
// compute and disply the total age of the male memebers of the family

let munsters = {
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: { age: 402, gender: "male" },
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" },
};

console.log(
  Object.values(munsters)
    .filter((ele) => {
      return ele.gender === "male";
    })
    .reduce((acc, ele) => {
      return acc + ele.age;
    }, 0)
);
