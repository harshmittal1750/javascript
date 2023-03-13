function unique(array) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!newArray.includes(array[i])) {
      newArray.push(array[i]);
    }
  }
  console.log(newArray);
  return newArray;
}

unique([1, 1, 23, 2, 3, 3]);
