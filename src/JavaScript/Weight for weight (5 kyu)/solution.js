function orderWeight(strng) {
  var arrayOfWeights = strng.split(" ");
  var sortedArray = arrayOfWeights.sort(sortAccordingToWeight);
  return sortedArray.join(" ");
}

function weightTheWeight(weight) {
  var arrayOfNumbers = weight.split("");
  var sum = 0;
  arrayOfNumbers.forEach((item) => {
    sum = sum + parseInt(item, 10);
  });
  return sum;
}

function sortAccordingToWeight(a, b) {
  if (weightTheWeight(a) < weightTheWeight(b)) {
    return -1;
  }
  if (weightTheWeight(a) > weightTheWeight(b)) {
    return 1;
  }
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
}
module.exports = orderWeight;
