const Test = require("@codewars/test-compat");

const createPhoneNumber = require("./solution");

describe("createPhoneNumber tests", () => {
  it("works", function () {
    Test.assertEquals(
      createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]),
      "(123) 456-7890"
    );
    Test.assertEquals(
      createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]),
      "(111) 111-1111"
    );
    Test.assertEquals(
      createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]),
      "(123) 456-7890"
    );
  });
});
