function bitmapHole(matrix) {
  const row = matrix.length;
  const column = matrix[0].length;
  const seen = new Array(row).fill(0).map((_) => new Array(column).fill(false));
  let count = 0;
  const deltas = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1],
  ];

  // curr: {x: number, y: number}
  function closeNeigbourHoles(curr) {
    // if edge return
    if (
      curr.x < 0 ||
      curr.x >= matrix.length ||
      curr.y < 0 ||
      curr.y >= matrix[0].length
    ) {
      return false;
    }
    // if 1 return or
    // if seen return
    if (+matrix[curr.x][curr.y] === 1 || seen[curr.x][curr.y]) {
      return false;
    }

    const newItem = matrix[curr.x].split("");

    newItem[curr.y] = 1;
    matrix[curr.x] = newItem.join("");
    seen[curr.x][curr.y] = true;
    // if 0 close neighbours
    for (let [dx, dy] of deltas) {
      closeNeigbourHoles({ x: curr.x + dx, y: curr.y + dy });
    }
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (+matrix[i][j] === 0) {
        count++;
        closeNeigbourHoles({ x: i, y: j });
      }
    }
  }

  return count;
}

module.exports = bitmapHole;
