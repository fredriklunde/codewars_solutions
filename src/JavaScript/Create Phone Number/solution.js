function createPhoneNumber(numbers) {
  var phoneNumber = "(";
  for (i = 0; i < numbers.length; i++) {
    if (i === 3) {
      phoneNumber = phoneNumber + ") ";
    } else if (i === 6) {
      phoneNumber = phoneNumber + "-";
    }
    phoneNumber = phoneNumber + numbers[i];
  }
  return phoneNumber;
}
module.exports = createPhoneNumber;
