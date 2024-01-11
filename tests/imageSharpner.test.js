const imgSharpner = require("../src/imageSharpner");

test("Image Sharpner Test 1", () => {
  const img = [
    [1, 4],
    [7, 10],
  ];
  const imgResult = [
    [7, 6],
    [5, 4],
  ];

  expect(imgSharpner(img)).toEqual(imgResult);
});

test("Image Sharpner Test 1", () => {
  const img = [
    [3, 0, 2, 5],
    [1, 2, 3, 4],
    [2, 3, 2, 3],
  ];
  const imgResult = [
    [1, 2.2, 2.8, 3],
    [2, 2, 2.625, 3],
    [2, 2, 3, 3],
  ];

  expect(imgSharpner(img)).toEqual(imgResult);
});
