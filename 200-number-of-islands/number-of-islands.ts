function numIslands(grid: string[][]): number {
  const m = grid.length;
  const n = grid[0].length;
  const visited = new Set<string>();
  let count = 0;
  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

  function isValid(x: number, y: number): boolean {
    return x >= 0 && x < m && y >= 0 && y < n;
  }

  function dfs(x: number, y: number): void {
    if (!isValid(x, y) || grid[x][y] === '0' || visited.has(`${x},${y}`)) {
      return;
    }

    visited.add(`${x},${y}`);
    
    for (const [dx, dy] of directions) {
      const newX = x + dx;
      const newY = y + dy;
      dfs(newX, newY);
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === '1' && !visited.has(`${i},${j}`)) {
        dfs(i, j);
        count++;
      }
    }
  }

  return count;
}
