let munster = {
  Herman : {age: 32, gender: "male"},
  Lily : {age: 30, gender: "female"},
  Grandpa : {age: 402, gender: "male"},
  Eddie : {age: 10, gender: "male"},
  Marilyn : {age: 23, gender: "female"}
};

function messWithDemographic(demoObject) {
  let arr = Object.values(demoObject); // return an array of object values, which are objects
  console.log(arr);
  arr.forEach(familyMember => {
    familyMember["age"] += 42;
    familyMember["gender"] = "other";
  });
  return arr;
}

console.log(messWithDemographic(munster));
//console.log(munster);