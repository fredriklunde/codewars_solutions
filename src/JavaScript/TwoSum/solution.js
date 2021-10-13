function twoSum(numbers, target) {
    var i;
    for (i = 0; i < numbers.length; i++) {
      var j = i+1
      for(j = i+1; j < numbers.length; j++){
         if(numbers[j] + numbers[i] === target){
           return [j,i]
         }
      }
    }
    return([0,0])
  }

  module.exports = twoSum;
