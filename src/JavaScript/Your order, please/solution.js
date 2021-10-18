function order(words){
  let sortedString = "";
  let wordsArray = words.split(" ");
  for(i=0; i < wordsArray.length ; i++){
    var numberToCheckFor = i+1
    wordsArray.forEach(item => {
      if(item.includes(numberToCheckFor)){
        sortedString = sortedString + item + " ";
      }
    })
  }
  return sortedString.trim();
}

module.exports = order;
