function numIslands(grid: string[][]): number {
  const m = grid.length;
  const n = m > 0 ? grid[0].length : 0;
  let count = 0;

  function dfs(x: number, y: number): void {
    if (x < 0 || x >= m || y < 0 || y >= n || grid[x][y] === '0') {
      return;
    }

    grid[x][y] = '0'; // Mark the current cell as visited

    // Recursively visit adjacent land cells
    dfs(x + 1, y);
    dfs(x - 1, y);
    dfs(x, y + 1);
    dfs(x, y - 1);
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === '1') {
        dfs(i, j); // Start DFS from a land cell
        count++;
      }
    }
  }

  return count;
}
