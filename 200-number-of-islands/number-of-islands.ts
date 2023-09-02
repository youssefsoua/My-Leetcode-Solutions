function numIslands(grid: string[][]): number {
    const m = grid.length
    const n = grid[0].length
    let count = 0
    const directions = [[1,0],[-1,0],[0,1],[0,-1]]

    for(let i = 0; i<m; i++){
        for(let j = 0; j<n; j++){
            if(grid[i][j] === "1"){
                const stack = [[i,j]]
                while(stack.length){
                    const [x,y] = stack.pop()
                    grid[x][y] = "0"
                    for(const direction of directions){
                        const [v,w] = direction
                        const newX = v+x
                        const newY = w+y
                        if(newX>=0 && newX<m && newY>=0 && newY<n && grid[newX][newY] === "1") stack.push([newX,newY])
                    }
                }
                count++
            }
        }
    }

    return count
};