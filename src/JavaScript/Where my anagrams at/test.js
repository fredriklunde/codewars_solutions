const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

const anagrams = require("./solution");

describe("anagrams", function () {
  it("should test for something", function () {
    assert.deepEqual(anagrams("abba", ["aabb", "abcd", "bbaa", "dada"]), [
      "aabb",
      "bbaa",
    ]);
    assert.deepEqual(
      anagrams("racer", ["crazer", "carer", "racar", "caers", "racer"]),
      ["carer", "racer"]
    );
    assert.deepEqual(anagrams("laser", ["lazing", "lazy", "lacer"]), []);
  });
});
