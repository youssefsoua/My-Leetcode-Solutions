function kWeakestRows(mat: number[][], k: number): number[] {
    const counter = new Map<number, number>()
    const result: number[] = []

    for(let i = 0; i<mat.length; i++){
        let sum: number = 0
        for(const e of mat[i]){
            if(e) sum++
        }
        counter.set(i, sum)
    }

    const temp = Array.from(counter.entries()).sort((a,b)=>a[1]-b[1])

    for(let i = 0; i<k; i++){
        result.push(temp[i][0])
    }
    
    return result

};