var obj = {
  name: "harsh",
  age: 21,

  getName: function () {
    console.log(this.name)();
  },
};
getName.cal(this.name);
// need to correct
