const prop1 = false;
const prop2 = false;

function callback() {
  return new Promise((resolve, reject) => {
    if (prop1) {
      reject({
        name: "prop1",
        message: "this is error message of prop1",
      });
    } else if (prop2) {
      reject({
        name: "prop2",
        message: "this is error message of prop2",
      });
    } else {
      resolve("Everything is working");
    }
  });
}

callback()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(`${err.name} ${err.message}`);
  });

let user = {
  name: "Sanchit",
  email: "sanchitbajaj02@gmail.com",
  password: "12345",
  number: "45204208",
};

console.log(user);
