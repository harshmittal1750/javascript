function removeOccurrences(array, num) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === num) {
      array.splice(i, 1);
      i--;
    }
    // console.log(array);
  }
  console.log(array);
}

removeOccurrences([1, 2, 234, 55, 551, 5, 3, 5, 5, 10], 5);
