function topKFrequent(nums: number[], k: number): number[] {
    const numbersCounter = new Map<number, number>();

    for (const num of nums) {
        numbersCounter.set(num, (numbersCounter.get(num) ?? 0) + 1);
    }

    let result: number[] = [];

    const counter = Array.from(numbersCounter.entries()).sort((a, b) => b[1] - a[1]);

    for (let i = 0; i < k; i++) {
        result.push(counter[i][0]);
    }

    return result;
};