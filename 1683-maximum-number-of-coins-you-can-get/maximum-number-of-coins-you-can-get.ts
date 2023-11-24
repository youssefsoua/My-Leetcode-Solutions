function maxCoins(piles: number[]): number {
    piles.sort((a, b) => a - b);

    let coins: number = 0;
    let turn: number = 0;
    let i: number = piles.length - 2;

    while (i > turn) {
        coins += piles[i];
        i -= 2;
        turn++;
    }

    return coins;
}
