var assert = require("assert");

const dirReduc = require("./solution");

describe("Directions Reduction", () => {
  it("test", () => {
    assert.deepEqual(
      dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]),
      ["WEST"]
    );
    assert.deepEqual(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]), [
      "NORTH",
      "WEST",
      "SOUTH",
      "EAST",
    ]);
    assert.deepEqual(
      dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]),
      []
    );
  });
});
