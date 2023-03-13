function sayHello() {
  console.log("Hello " + this.name);
}

var obj = { name: "Sandy" };

sayHello.call(obj);
