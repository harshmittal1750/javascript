var profile = {
  name: "Alex",
  roll: 10,
  getInfo: function () {
    console.log(`
        name is ${this.name},
        roll is ${this.roll}
        
        
        `);
  },
};
var profile2 = {
  name: "Alice",
  roll: 20,
};

profile.getInfo.bind(profile2)();
