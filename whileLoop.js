const states = ["haryana", "rajasthan", "punjab", 12332, "delhi"];
let i = 0;
while (i < states.length) {
  if (typeof states[i] !== "string") break;
  console.log(states[i]);
  i++;
}
