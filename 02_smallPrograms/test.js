console.log(foo());



function foo() {
  console.log('waiting for bar!');
} 

function foo() {
  console.log(foo);
  function bar() {
    console.log('bar again');
  }
   bar();
  function bar() {
    console.log('bar again and again');
  }
}






