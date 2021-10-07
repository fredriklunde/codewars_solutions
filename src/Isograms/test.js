const Test = require("@codewars/test-compat");
var assert = require("assert");

const isIsogram = require("./solution");

describe("isIsogram", function () {
  it("should work for some examples", function () {
    assert.deepEqual(isIsogram("Dermatoglyphics"), true);
    assert.deepEqual(isIsogram("isogram"), true);
    assert.deepEqual(isIsogram("aba"), false, "same chars may not be adjacent");
    assert.deepEqual(
      isIsogram("moOse"),
      false,
      "same chars may not be same case"
    );
    assert.deepEqual(isIsogram("isIsogram"), false);
    assert.deepEqual(isIsogram(""), true, "an empty string is a valid isogram");
  });
});
