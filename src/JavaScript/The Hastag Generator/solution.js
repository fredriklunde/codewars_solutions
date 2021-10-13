function generateHashtag(str) {
  if (!str || /^\s*$/.test(str)) {
    return false;
  }
  let newStr = str.replace(/\b\w/g, (l) => l.toUpperCase());
  newStr = newStr.replace(/\s/g, "");
  newStr = "#" + newStr;
  if (newStr.length > 140) {
    return false;
  }
  return newStr;
}

module.exports = generateHashtag;
