function maxProfit(prices: number[]): number {
    let max = 0
    let min = prices[0]

    for(let i = 1; i<prices.length; i++){
        max = Math.max(max, prices[i] - min)
        min = Math.min(min, prices[i])
    }

    return max
};