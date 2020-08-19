function isAnIpNumber(str) {
  let regExp = /^\d+$/;
  if(regExp.test(str)){ // there is a match between regExp and str
    let number = Number(str);
    return number >= 0 && number <= 255; // return true or false if the number between 0-255 
  } else {
    return false;
  }
}

function isAnInputAnIp(input) {
  let inputAsArray = input.split(".");
  if(inputAsArray.length !== 4) return false;

  while (inputAsArray.length > 0) {
    let item = inputAsArray.pop();
    if (!isAnIpNumber(item)) return false;
  }
  return true;
}

console.log(isAnInputAnIp("0.0.10.198"));

console.log(isAnInputAnIp("0.0"));

console.log(isAnInputAnIp("3.4..4"));

console.log(isAnInputAnIp("f.5.j.8"));
console.log(isAnInputAnIp(""));