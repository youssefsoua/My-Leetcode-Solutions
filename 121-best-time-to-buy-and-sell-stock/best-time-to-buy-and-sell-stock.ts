function maxProfit(prices: number[]): number {
    let maxProfit: number = 0;
    let minPrice: number = prices[0];

    for (const price of prices) {
        maxProfit = Math.max(maxProfit, price - minPrice);
        minPrice = Math.min(minPrice, price);
    }

    return maxProfit;
}