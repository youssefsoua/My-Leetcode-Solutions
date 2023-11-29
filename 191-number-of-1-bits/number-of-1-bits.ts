function hammingWeight(n: number): number {
    return n === 0 ? 0 : (n & 1) + hammingWeight(n >>> 1);
};