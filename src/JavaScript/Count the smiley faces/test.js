const Test = require("@codewars/test-compat");

const countSmileys = require("./solution");

describe("countSmileys", function() {
  it("works", () => {
    Test.assertEquals(countSmileys([]), 0);
    Test.assertEquals(countSmileys([':D',':~)',';~D',':)']), 4);
    Test.assertEquals(countSmileys([':)',':(',':D',':O',':;']), 2);
    Test.assertEquals(countSmileys([';]', ':[', ';*', ':$', ';-D']), 1);
  });
});