const prop1 = false;
const prop2 = false;

const callback = (resFn, errFn) => {
  // in a func the arguments are also function
  // e.g res,err
  if (prop1) {
    errFn({
      name: "prop1",
      message: "this is error message of prop1",
    });
  } else if (prop2) {
    errFn({
      name: "prop2",
      message: "this is error message of prop2",
    });
  } else {
    resFn("Everything is working");
  }
};

callback(
  (resArgument) => {
    console.log(resArgument);
  },
  (errArgument) => {
    console.log(`${errArgument.name} ${errArgument.message}`);
  }
);

// abc((err, result) => {
//   if (err) throw Error;

//   else {
//     console.log(result);

//     def(result, (err, res2) => {
//       xyz(result, res2, (err, res3) => {
//         if (err) {
//           res.status(400).json({
//             error: err
//           })
//         }

//         res.status(200).json({
//           result: res3
//         })

//       })
//     })
//   }
// })

let user = {
  name: "Sanchit",
  email: "sanchitbajaj02@gmail.com",
  password: "12345",
  number: "45204208",
};

console.log(user);
