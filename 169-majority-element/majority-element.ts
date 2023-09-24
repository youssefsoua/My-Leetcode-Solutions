function majorityElement(nums: number[]): number {
    const n = nums.length;
    const numCount = new Map<number, number>();

    for (const num of nums) {
        const count = (numCount.get(num) || 0) + 1;
        if (count >= n / 2) return num;
        numCount.set(num, count);
    }
}