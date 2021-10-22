const Test = require("@codewars/test-compat");

const list = require("./solution");
describe("format a string of names like Bart, Lisa  Maggie", function () {
  it("should work for some examples", function () {
    Test.assertEquals(
      list([
        { name: "Bart" },
        { name: "Lisa" },
        { name: "Maggie" },
        { name: "Homer" },
        { name: "Marge" },
      ]),
      "Bart, Lisa, Maggie, Homer & Marge",
      "Must work with many names"
    );
    Test.assertEquals(
      list([{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }]),
      "Bart, Lisa & Maggie",
      "Must work with many names"
    );
    Test.assertEquals(
      list([{ name: "Bart" }, { name: "Lisa" }]),
      "Bart & Lisa",
      "Must work with two names"
    );
    Test.assertEquals(
      list([{ name: "Bart" }]),
      "Bart",
      "Wrong output for a single name"
    );
    Test.assertEquals(list([]), "", "Must work with no names");
  });
});
