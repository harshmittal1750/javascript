var User = function (firstName, courseCount) {
  this.firstName = firstName;
  this.courseCount = courseCount;
  console.log(`Course count is: ${this.courseCount}`);
  console.log(`User is: ${this.firstName}`);
};
User("harsh", 10);

var harsh = new User("harsh", 2);
console.log(harsh);
var mittal = new User("harsh", 2);
console.log(mittal);
