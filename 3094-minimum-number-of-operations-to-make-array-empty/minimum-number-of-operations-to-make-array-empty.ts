function minOperations(nums: number[]): number {
    const counter = new Map<number, number>();
    let count: number = 0;

    for (const num of nums) {
        counter.set(num, (counter.get(num) || 0) + 1);
    }

    for (let c of counter.values()) {
        if (c < 2) return -1;
        count += Math.ceil(c / 3);
    }

    return count;
}
