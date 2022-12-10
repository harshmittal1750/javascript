const hello = () => {
  console.log("hello");
};

const welcome = () => {
  console.log("welcome");
};
const hi = () => {
  console.log("hi");
};
const sayHello = () => {
  return hello;
};
const sayHi = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(hi);
    });
  });
};
const sayWelcome = () => {
  return welcome;
};
// hello();
// welcome();
sayHi()();
sayHello()();
sayWelcome()();
