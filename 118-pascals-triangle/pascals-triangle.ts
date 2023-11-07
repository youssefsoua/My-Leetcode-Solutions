function generate(numRows: number): number[][] {
    if (numRows === 1) return [[1]];
    const prv = generate(numRows - 1);
    const n = prv.length - 1;
    const current = [];
    for (let i = 0; i < prv[n].length; i++) {
        current.push((prv[n][i - 1] || 0) + prv[n][i]);
    }
    current.push(1);
    prv.push(current);
    return prv;
}
