function numIslands(grid: string[][]): number {
    const m = grid.length
    const n = grid[0].length
    const set = new Set<string>()
    let count = 0
    const directions = [[1,0],[-1,0],[0,1],[0,-1]]

    for(let i = 0; i<m; i++){
        for(let j = 0; j<n; j++){
            if(grid[i][j] === "1" && !set.has(`i=${i},j=${j}`)){
                const stack = [[i,j]]
                while(stack.length){
                    const [x,y] = stack.pop()
                    if(grid[x][y] === "1") set.add(`i=${x},j=${y}`)
                    for(const direction of directions){
                        const [v,w] = direction
                        const newX = v+x
                        const newY = w+y
                        if(newX>=0 && newX<m && newY>=0 && newY<n && grid[newX][newY] ==="1" && !set.has(`i=${newX},j=${newY}`)) stack.push([newX,newY])
                    }
                }
                count++
            }
        }
    }

    return count
};