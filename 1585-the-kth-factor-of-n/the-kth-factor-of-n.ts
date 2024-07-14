function kthFactor(n: number, k: number): number {
    let p = 0;

    for (let i = 1; i <= n / 2; i++) {
        if (n % i === 0) p++;
        if (p === k) return i;
    }

    if (p + 1 === k) return n;

    return -1;
};