function sayHello() {
  var name = "harsh";
  console.log("Hello " + name);
  function sayHi() {
    console.log(name);
  }
  return sayHi;
}
var func = sayHello();

func();
