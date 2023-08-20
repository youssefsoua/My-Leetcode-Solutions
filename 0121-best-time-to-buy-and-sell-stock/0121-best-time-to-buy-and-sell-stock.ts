function maxProfit(prices: number[]): number {
    const n = prices.length
    if(n === 1) return 0

    let max = 0
    let min = prices[0]

    for(let i = 1; i<n; i++){
        max = Math.max(max, prices[i] - min)
        min = Math.min(min, prices[i])
    }

    return max
};