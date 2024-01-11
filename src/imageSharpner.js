function imageSharpner(imgMatrix) {
  const row = imgMatrix.length;
  const column = imgMatrix[0].length;

  const finalImage = new Array(row)
    .fill(0)
    .map((_) => new Array(column).fill(0));

  const deltas = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  function sharpenPoint(curX, curY) {
    let neigbourSum = 0;
    let neibourCount = 0;
    for (const [dx, dy] of deltas) {
      if (
        curX + dx < 0 ||
        curX + dx >= row ||
        curY + dy < 0 ||
        curY + dy >= column
      ) {
        continue;
      }
      if (imgMatrix[curX + dx][curY + dy] >= 0) {
        neibourCount += 1;
        neigbourSum += imgMatrix[curX + dx][curY + dy];
      }
    }

    finalImage[curX][curY] = neigbourSum / neibourCount;
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      sharpenPoint(i, j);
    }
  }

  return finalImage;
}

module.exports = imageSharpner;
