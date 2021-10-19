function sortArray(array) {
  var arrayOfSortedOddNumbers = [];
  var sortedArray = [];
  array.forEach((num) => {
    if (num % 2 != 0) {
      arrayOfSortedOddNumbers.push(num);
    }
  });
  arrayOfSortedOddNumbers.sort(function (a, b) {
    return a - b;
  });
  var sortedNumbersAddedToArray = 0;
  for (i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      sortedArray.push(array[i]);
    } else {
      sortedArray.push(arrayOfSortedOddNumbers[sortedNumbersAddedToArray]);
      sortedNumbersAddedToArray++;
    }
  }
  return sortedArray;
}

module.exports = sortArray;
