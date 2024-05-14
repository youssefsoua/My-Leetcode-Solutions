const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];

function getMaximumGold(grid) {
  const m = grid.length;
  const n = grid[0].length;
  let max = 0;
  const visited = new Set();

  const dfs = (i, j, sum) => {
    if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] === 0 || visited.has(`${i}_${j}`)) {
      return;
    }

    visited.add(`${i}_${j}`);
    sum += grid[i][j];
    max = Math.max(max, sum);

    for (const dir of dirs) {
      dfs(i + dir[0], j + dir[1], sum);
    }

    visited.delete(`${i}_${j}`);
    sum -= grid[i][j];
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      dfs(i, j, 0);
    }
  }

  return max;
}