function maximumElementAfterDecrementingAndRearranging(arr: number[]): number {
    arr.sort((a,b)=>a-b)
    if(arr[0] !== 1) arr[0] = 1
    let max = arr[0]
    for(let i = 1; i<arr.length; i++){
        if(arr[i]-arr[i-1]>1){
            arr[i]=arr[i-1]+1
        }
        max = Math.max(arr[i], arr[i-1])
    }
    return max
};