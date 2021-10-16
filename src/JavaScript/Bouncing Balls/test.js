const Test = require("@codewars/test-compat");

const bouncingBall = require("./solution");

describe("Bouncing Ball", function () {
  it("test1", function () {
    Test.assertEquals(bouncingBall(3.0, 0.66, 1.5), 3);
  });

  it("test2", function () {
    Test.assertEquals(bouncingBall(30.0, 0.66, 1.5), 15);
  });
});
