let obj = {a: 2};

Object.defineProperty(obj, 'x', {
  value : 6,
  enumerable : false
});

console.log(obj);

console.log(Object.keys(obj));

console.log(obj.hasOwnProperty('x'));