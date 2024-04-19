function numIslands(grid: string[][]): number {
    const numRows = grid.length;
    const numCols = grid[0].length;
    let islandCount = 0;
    const directions: [number, number][] = [[1, 0], [-1, 0], [0, 1], [0, -1]];

    function dfs(x: number, y: number): void {
        if (x < 0 || x >= numRows || y < 0 || y >= numCols || grid[x][y] === "0") {
            return;
        }
        grid[x][y] = "0"; // Mark the visited cell
        for (const [dx, dy] of directions) {
            dfs(x + dx, y + dy);
        }
    }

    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            if (grid[i][j] === "1") {
                dfs(i, j);
                islandCount++;
            }
        }
    }

    return islandCount;
}