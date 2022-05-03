var User = function (firstName, courseCount) {
  this.firstName = firstName;
  this.courseCount = courseCount;
  this.getCourseCount = function () {
    return `${this.firstName} is enrolled in total of ${this.courseCount} courses.`;
  };
};
var harsh = new User("Harsh", 0);
var ankur = new User("Ankur", 0);
console.log(harsh);
console.log(ankur);
