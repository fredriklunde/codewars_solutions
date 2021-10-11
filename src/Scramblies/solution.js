function scramble(str1, str2) {
  var str1ContainsAllCharactersinStr2 = true;
  var stringWithLetters = str1;
  for (let i = 0; i < str2.length; i++) {
    var letter = str2[i];
    var indexOfFirst = stringWithLetters.indexOf(letter);
    if (indexOfFirst < 0) {
      str1ContainsAllCharactersinStr2 = false;
      break;
    } else {
      stringWithLetters =
        stringWithLetters.slice(0, indexOfFirst) +
        stringWithLetters.slice(indexOfFirst + 1);
    }
  }
  return str1ContainsAllCharactersinStr2;
}

module.exports = scramble;
