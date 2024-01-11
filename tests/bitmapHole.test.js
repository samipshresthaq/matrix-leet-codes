const countHoles = require("../src/bitmapHole");

test("Bitmap Hole Test", function () {
  const arryStr = ["00010", "00001", "01101", "01110"];
  const arryStr2 = ["1111", "1111", "1111", "1111"];
  const arryStr4 = ["01111", "01101", "00011", "11110"];
  const arryStr5 = ["00000", "01111", "01111", "01110"];
  const arryStr6 = ["11011", "01000", "00010", "11110"];

  expect(countHoles(arryStr)).toEqual(3);
  expect(countHoles(arryStr2)).toEqual(0);
  expect(countHoles(arryStr4)).toEqual(3);
  expect(countHoles(arryStr5)).toEqual(2);
  expect(countHoles(arryStr6)).toEqual(1);
  expect(countHoles(arryStr)).not.toBe(1);
});
