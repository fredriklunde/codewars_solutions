function minMax(arr) {
  let minNumber = arr[0];
  let maxNumber = arr[arr.length - 1];

  arr.forEach(function (item) {
    if (item < minNumber) {
      minNumber = item;
    }
    if (item > maxNumber) {
      maxNumber = item;
    }
  });
  return [minNumber, maxNumber]; // fix me!
}

module.exports = minMax;
