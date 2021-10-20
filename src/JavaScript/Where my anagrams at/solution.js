function anagrams(word, words) {
  var wordAlphabetical = word.split("").sort().join("");
  var arrayOfPossibleWords = [];
  for (var i = 0; i < words.length; i++) {
    var wordToCheckAlphabetical = words[i].split("").sort().join("");
    if (wordToCheckAlphabetical === wordAlphabetical) {
      arrayOfPossibleWords.push(words[i]);
    }
  }

  return arrayOfPossibleWords;
}

module.exports = anagrams;
