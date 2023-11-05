function getWinner(arr: number[], k: number): number {
    let i = 0
    let j = 1
    const n = arr.length
    const counter = new Map()
    let max = 0
    for(const e of arr){
        counter.set(e,0)
        max = Math.max(max,e)
    }

    if(k>n*2) return max

    while(true){
        let tempI = i%n
        let tempJ = j%n

        if(arr[tempI]>arr[tempJ]){
            const count = counter.get(arr[tempI])
            if(count + 1 === k) return arr[tempI]
            else counter.set(arr[tempI], count + 1)

            if(i>j && tempI>tempJ) j = i+1
            else j++
        }else{
            const count = counter.get(arr[tempJ])
            if(count + 1 === k) return arr[tempJ]
            else counter.set(arr[tempJ], count + 1)

            if(j>i && tempJ>tempI) i = j+1
            else i++
        }
    }
   
};