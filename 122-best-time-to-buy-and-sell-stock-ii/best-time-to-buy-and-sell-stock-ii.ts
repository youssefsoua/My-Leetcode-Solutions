function maxProfit(prices: number[]): number {
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        const profit = prices[i] - prices[i - 1];
        if (profit > 0) maxProfit += profit;
    }

    return maxProfit;
}
