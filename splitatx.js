function splitAtX(string) {
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "x") {
      let halfString = string.slice(0, i);
      let lastString = string.slice(i + 1, string.length);
      if (halfString.length > lastString.length) {
        return halfString;
      } else {
        return lastString;
      }
    }
  }
}

console.log(splitAtX("Happyxdays"));
