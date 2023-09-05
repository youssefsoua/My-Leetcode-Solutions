function orangesRotting(grid: number[][]): number {
    const m: number = grid.length;
    const n: number = grid[0].length;
    let oranges: number = 0;
    let elapsedTime: number = 0;
    const rottenOranges: [number, number][] = [];

    for (let i: number = 0; i < m; i++) {
        for (let j: number = 0; j < n; j++) {
            if (grid[i][j] === 1) oranges++;
            if (grid[i][j] === 2) rottenOranges.push([i, j]);
        }
    }

    if (!oranges) return 0;

    const directions: [number, number][] = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
    ];

    while (rottenOranges.length) {
        let currentNodes: number = rottenOranges.length;
        while (currentNodes) {

            const [i, j]: [number, number] = rottenOranges.shift();
            currentNodes--;

            for (const direction of directions) {

                const [x, y]: [number, number] = direction;
                const newX: number = i + x;
                const newY: number = j + y;

                if (
                    newX >= 0 &&
                    newX < m &&
                    newY >= 0 &&
                    newY < n &&
                    grid[newX][newY] === 1
                ) {
                    rottenOranges.push([newX, newY]);
                    grid[newX][newY] = 2;
                    oranges--;
                }
            }
        }
        
        elapsedTime++;
    }

    return oranges ? -1 : elapsedTime - 1;
}
