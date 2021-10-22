function list(names) {
  var returnString = "";
  for (var i = 0; i < names.length; i++) {
    if (i === 0) {
      returnString = returnString + names[i].name;
    } else if (i + 1 === names.length) {
      returnString = returnString + " & " + names[i].name;
    } else {
      returnString = returnString + ", " + names[i].name;
    }
  }
  return returnString;
}

module.exports = list;
