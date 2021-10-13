const Test = require("@codewars/test-compat");
var assert = require("assert");

const breakCamelCase = require("./solution");

describe("BreakCamelCase", function () {
  it("should work for some examples", function () {
    Test.assertEquals(
      breakCamelCase("camelCasing"),
      "camel Casing",
      "Unexpected result"
    );
    Test.assertEquals(
      breakCamelCase("camelCasingTest"),
      "camel Casing Test",
      "Unexpected result"
    );
  });
});
