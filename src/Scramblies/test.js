const Test = require("@codewars/test-compat");

const scramble = require("./solution");

describe("Scramblies", function () {
  it("should work for some examples", function () {
    Test.assertEquals(scramble("rkqodlw", "world"), true);
    Test.assertEquals(scramble("cedewaraaossoqqyt", "codewars"), true);
    Test.assertEquals(scramble("katas", "steak"), false);
    Test.assertEquals(scramble("scriptjava", "javascript"), true);
    Test.assertEquals(scramble("scriptingjava", "javascript"), true);
    Test.assertEquals(scramble("scriptsjava", "javascripts"), true);
    Test.assertEquals(scramble("jscripts", "javascript"), false);
    Test.assertEquals(scramble("aabbcamaomsccdd", "commas"), true);
  });
});
