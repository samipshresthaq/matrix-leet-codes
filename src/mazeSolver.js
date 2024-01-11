const neighbours = [
  [0, -1],
  [0, 1],
  [1, 0],
  [-1, 0],
];

function findPath(maze, wall, curr, end, visited, finalPath) {
  // 1. Should not be edge
  if (
    curr.x < 0 ||
    curr.x >= maze[0].length ||
    curr.y < 0 ||
    curr.y >= maze.length
  ) {
    return false;
  }

  // 2. Should not be wall
  if (maze[curr.y][curr.x] === wall) {
    return false;
  }

  // 3. Should not be end
  if (curr.x === end.x && curr.y === end.y) {
    finalPath.push(curr);
    return true;
  }

  // 4. should not be visited
  if (visited[curr.y][curr.x]) {
    return false;
  }

  // pre
  visited[curr.y][curr.x] = true;
  finalPath.push(curr);

  // check for each neighbours
  for (let [dx, dy] of neighbours) {
    if (
      findPath(
        maze,
        wall,
        { x: curr.x + dx, y: curr.y + dy },
        end,
        visited,
        finalPath
      )
    ) {
      return true;
    }
  }

  // post
  finalPath.pop();
  return false;
}

function mazeSolver(maze, wall, start, end) {
  const row = maze.length;
  const column = maze[0].length;
  const visitedMap = [];
  for (let i = 0; i < row; i++) {
    visitedMap.push(new Array(column).fill(false));
  }
  const finalPath = [];

  findPath(maze, wall, start, end, visitedMap, finalPath);

  return finalPath;
}

module.exports = mazeSolver;
