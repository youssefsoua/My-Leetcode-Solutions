function pivotInteger(n: number): number {
    const result: number[] = Array(n);

    let prev: number = 0;
    for (let i = 1; i <= n; i++) {
        prev += i;
        result[i - 1] = prev;
    }

    prev = 0;

    for (let i = n; i > 0; i--) {
        prev += i;
        result[i - 1] -= prev;
        if (!result[i - 1]) return i;
    }

    return -1;
};