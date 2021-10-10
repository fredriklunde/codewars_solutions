function narcissistic(value) {
  var valueSring = value.toString();
  var sum = 0;
  valueSring.split("").map(function (letter) {
    sum = sum + Math.pow(letter, valueSring.length);
  });
  return sum === value ? true : false;
}

module.exports = narcissistic;
