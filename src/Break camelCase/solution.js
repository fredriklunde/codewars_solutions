// complete the function
function breakCamelCase(string) {
  const str = string.replace(/([A-Z])/g, " $1").trim();
  return str;
}

module.exports = breakCamelCase;
