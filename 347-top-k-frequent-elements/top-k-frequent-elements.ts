function topKFrequent(nums: number[], k: number): number[] {
    const numbersCounter = new Map<number, number>();

    for (const num of nums) {
        numbersCounter.set(num, (numbersCounter.get(num) || 0) + 1);
    }
    
    return Array.from(numbersCounter.entries())
        .sort((a, b) => b[1] - a[1])
        .slice(0, k)
        .map((e) => e[0]);
}
