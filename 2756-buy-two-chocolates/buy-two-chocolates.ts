function buyChoco(prices: number[], money: number): number {
    prices.sort((a, b) => a - b);
    let count: number = 2;
    let sum: number = 0;

    for (let i = 0; i < prices.length; i++) {
        if (count > 0 && prices[i] > money - sum) break;

        count--;
        sum += prices[i];

        if (count === 0) return money - sum;
    }

    return money;
}
