const sum = require("../index");

// import sum from "../index";

test("adding 1 and 2 should equal to 3", () => {
  expect(sum(1, 2)).toBe(3);
});
