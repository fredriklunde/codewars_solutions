function isIsogram(str){
  for (var i = 0; i < str.length; i++) {
  var letter = str.charAt(i).toLowerCase();
    for(var j = i+1; j < str.length; j++)
      if(letter === str.charAt(j).toLowerCase()){
        return false
      }
  }
  return true
}
  

  module.exports = isIsogram;
