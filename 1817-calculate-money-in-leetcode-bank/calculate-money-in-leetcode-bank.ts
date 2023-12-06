function totalMoney(n: number): number {
    const rest: number = n % 7;

    const multiplier: number = rest? Math.floor(n / 7) + 1 : Math.floor(n / 7);
    
    let total: number = 28 * multiplier;

    for (let i = 1; i < multiplier; i++) {
        total += i * 7;
    }
    console.log(rest, total, multiplier)

    if (rest) {
        for (let i = 7; i > rest; i--) {
            total -= i + multiplier - 1;
        }
    }

    return total;
}
