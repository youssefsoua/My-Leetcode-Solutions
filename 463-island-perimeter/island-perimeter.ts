function islandPerimeter(grid: number[][]): number {
    const rows: number = grid.length;
    const cols: number = grid[0].length;
    const directions: number[][] = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    let perimeter: number = 0;
    const queue: number[][] = [];

    // Find the first cell with land
    outerLoop:
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 1) {
                queue.push([i, j]);
                grid[i][j] = 2;
                break outerLoop;
            }
        }
    }

    while (queue.length) {
        const [x, y] = queue.shift();
        let adjacentLandCount: number = 4;

        for (const [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;

            if (nx >= 0 && nx < rows && ny >= 0 && ny < cols && grid[nx][ny]) {
                adjacentLandCount--;
                if (grid[nx][ny] === 1) {
                    queue.push([nx, ny]);
                    grid[nx][ny] = 2;
                }
            }
        }

        perimeter += adjacentLandCount;

    }

    return perimeter;
}
