function isAllX(str) {
  let flag = true;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== "x" && str[i] !== "X") {
      flag = false;
      // break;
    }
  }
  return flag;
}

console.log(isAllX("xAbX"));
console.log(isAllX("XXXxxxXXXxxx"));
console.log(isAllX("xx"));
