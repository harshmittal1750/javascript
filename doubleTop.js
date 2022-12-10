function topDouble(value, top) {
  do {
    value += value;
    if (value < top) {
      var trueValue = value;
    }
  } while (value < top);
  console.log(trueValue);
}
topDouble(1, 5);
