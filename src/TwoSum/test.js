const Test = require("@codewars/test-compat");
var assert = require("assert");

const twoSum = require("./solution");

function numericalCompare(a, b) {
  return a - b;
}

describe("twoSum", function () {
  it("should work for some examples", function () {
    assert.deepEqual(twoSum([1, 2, 3], 4).sort(numericalCompare), [0, 2]);
    assert.deepEqual(
      twoSum([1234, 5678, 9012], 14690).sort(numericalCompare),
      [1, 2]
    );
    assert.deepEqual(twoSum([2, 2, 3], 4).sort(numericalCompare), [0, 1]);
  });
});
