let munstersDescription = "The Munsters are creepy and spooky" ;

let munsterArray = munstersDescription.split('');
 
let swapedArray = munsterArray.map(ele => {
if(ele === ele.toUpperCase()) {
  return ele.toLowerCase();
}else {
  return ele.toUpperCase();
}
});

console.log(swapedArray.join(''));
