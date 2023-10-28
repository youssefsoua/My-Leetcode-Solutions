function countNegatives(grid: number[][]): number {
    const m = grid.length;
    const n = grid[0].length;
    let count = 0;
    let i = m - 1;
    while (i >= 0 && grid[i][n - 1] < 0) {
        if (grid[i][0] < 0) {
            count += n;
        } else {
            let low = 0;
            let high = n - 1;
            while (low <= high) {
                const mid = Math.floor((low + high) / 2);
                if (grid[i][mid] < 0 && grid[i][mid - 1] >= 0) {
                    count += n - mid;
                    break;
                } else if (grid[i][mid] < 0 && grid[i][mid - 1] < 0) {
                    high = mid - 1;
                } else {
                    low = mid + 1;
                }
            }
        }
        i--;
    }
    return count;
}
