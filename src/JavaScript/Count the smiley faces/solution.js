//return the total number of smiling faces in the array
function countSmileys(arr) {
  var numberOfSmileys = 0;
  arr.map(function (item) {
    if (isValidSmiley(item)) {
      numberOfSmileys++;
    }
  });
  return numberOfSmileys;
}

function isValidSmiley(item) {
  var itemAsString = item.toString().trim();
  var firstCharacter = itemAsString.charAt(0);
  var secondCharacter = itemAsString.charAt(1);
  var thirdCharacter = itemAsString.charAt(2);
  switch (firstCharacter) {
    case ":":
    case ";":
      switch (secondCharacter) {
        case ")":
        case "D":
          return true;
        case "-":
        case "~":
          switch (thirdCharacter) {
            case "D":
            case ")":
              return true;
          }
      }
    default:
      return false;
  }
}

module.exports = countSmileys;
