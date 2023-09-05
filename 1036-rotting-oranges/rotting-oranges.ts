function orangesRotting(grid: number[][]): number {
    const m = grid.length
    const n = grid[0].length
    let oranges = 0
    let elapsedTime = 0
    let rottenOranges = []

    for(let i = 0; i<m; i++){
        for(let j = 0; j<n; j++){
            if(grid[i][j] === 1) oranges++
            if(grid[i][j] === 2) rottenOranges.push([i,j]) 
        }
    }

    if(!oranges) return 0

    const directions = [[1,0],[-1,0],[0,1],[0,-1]]

    while(rottenOranges.length){
        let currentNodes = rottenOranges.length
        while(currentNodes){
            const [i,j] = rottenOranges.shift()
            currentNodes--
            for(const direction of directions){
                const [x,y] = direction
                if(i+x>=0 && i+x<m && j+y>=0 && j+y<n && grid[i+x][j+y] === 1){
                    rottenOranges.push([i+x,j+y])
                    grid[i+x][j+y] = 2
                    oranges--
                }
            }
        }
        elapsedTime++
    }

    return oranges ? -1 : elapsedTime - 1
};