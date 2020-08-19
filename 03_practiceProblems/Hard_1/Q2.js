let object = {first : [1]};
//let newArray = object["first"]; // pass by refrence

// if we want to modfiy the array without mutate the object
// we have to options :

// first
// return new array (shallow copy of the original array)
// newArray refrence to a copy of the original array
//let newArray = object["first"].slice();

//second
//using concat(), to return a new array 
//[].concat([elemets])
// let newArray = object["first"].concat();
let newArray = [].concat(object["first"]);


newArray.push(2);

console.log(newArray);
console.log(object);