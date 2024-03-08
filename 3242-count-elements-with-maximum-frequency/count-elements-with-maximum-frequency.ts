function maxFrequencyElements(nums: number[]): number {
    const counter = new Map<number, number>();
    for (const num of nums) {
        counter.set(num, (counter.get(num) || 0) + 1);
    }

    const sorted = Array.from(counter.values()).sort((a, b) => b - a);
    let result: number = sorted[0];

    if (sorted.length > 1) {
        let i: number = 1;

        while (sorted[i] === sorted[i - 1]) {
            result += sorted[i];
            i++;
        }
    }

    return result;
};