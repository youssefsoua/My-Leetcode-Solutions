function findTheWinner(n: number, k: number): number {
    return winnerHelper(n, k) + 1;
};

const winnerHelper = (n: number, k: number) => {
    if (n == 1) {
        return 0;
    }
    return (winnerHelper(n - 1, k) + k) % n;
}