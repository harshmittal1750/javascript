let a = 7;
let b = 10;
var c = a + b;

const sumOf = (a, b) => {
  console.log(c);
  return function () {
    console.log(a);
    console.log(b);
    return function () {
      console.log(a * b);
    };
  };
};
// var sum = sumOf(4, 5);
// sum();
sumOf(4, 6)()();
