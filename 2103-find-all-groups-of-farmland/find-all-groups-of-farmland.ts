function findFarmland(land: number[][]): number[][] {
    const rows = land.length;
    const cols = land[0].length;
    const farmland: number[][] = [];

    function dfs(r: number, c: number, bottomRight: number[]) {
        // Base case: check for out-of-bounds or non-farmland
        if (r < 0 || r >= rows || c < 0 || c >= cols || land[r][c] === 0) {
            return;
        }

        // Mark the current cell as visited by setting it to 0
        land[r][c] = 0;

        // Update the bottom-right corner of the current farmland
        bottomRight[0] = Math.max(bottomRight[0], r);
        bottomRight[1] = Math.max(bottomRight[1], c);

        // Explore the adjacent cells in the grid
        dfs(r + 1, c, bottomRight); // Down
        dfs(r, c + 1, bottomRight); // Right
    }

    // Iterate over each cell in the grid
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (land[r][c] === 1) {
                const bottomRight = [r, c];
                dfs(r, c, bottomRight);
                farmland.push([r, c, bottomRight[0], bottomRight[1]]);
            }
        }
    }

    return farmland;
}