const Test = require("@codewars/test-compat");
const twoSum = require('./solution');


function numericalCompare(a, b) {
    return a - b;
  }
  
  Test.assertSimilar(twoSum([1,2,3], 4).sort(numericalCompare), [0,2]);
  Test.assertSimilar(twoSum([1234,5678,9012], 14690).sort(numericalCompare), [1,2]);
  Test.assertSimilar(twoSum([2,2,3], 4).sort(numericalCompare), [0,1]);
  