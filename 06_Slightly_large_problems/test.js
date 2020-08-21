function joinOr(arr, delimiter = ',', word = 'or') {
  if(arr.length === 1) {
    return `${arr[0]}`;
  } else if(arr.length === 2) {
    return arr.join(` ${word} `);
  }else if (arr.length === 0) {
    return '';
  }else {
    let str = arr.slice(0, arr.length -1 ).join(`${delimiter} `) +
             delimiter+' '+ word +' '+ arr[arr.length-1];

    return str;
  }
}

console.log(joinOr([1, 2]));
console.log(joinOr([1, 2, 3]));
console.log(joinOr([1, 2, 3], ';'));
console.log(joinOr([1, 2], ',', 'and'));
console.log(joinOr([1, 2, 3], ',', 'and'));
console.log(joinOr([]));