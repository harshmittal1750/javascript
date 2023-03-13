function addOne(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i] + 1;
  }
  console.log(array);
  return array;
}
addOne([1, 2, 34]);
