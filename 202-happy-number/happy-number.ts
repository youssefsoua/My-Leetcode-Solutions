function isHappy(n: number, visited = new Set<number>()): boolean {
    if ((n < 4 && n !== 1) || visited.has(n)) return false;
    if (n === 1) return true;

    visited.add(n);

    const number = n
        .toString()
        .split("")
        .reduce((s, e) => s + (+e) ** 2, 0);

    const result = isHappy(number, visited);

    return result;
}
