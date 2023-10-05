function majorityElement(nums: number[]): number[] {
    const n: number = nums.length / 3;
    const result: number[] = [];
    const counter = new Map<number, number>();

    for (const num of nums) {
        counter.set(num, (counter.get(num) || 0) + 1);
    }

    for (const count of counter.entries()) {
        if (count[1] > n) result.push(count[0]);
    }

    return result;
}
