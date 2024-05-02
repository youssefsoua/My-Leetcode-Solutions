function findMaxK(nums: number[]): number {
    let max = -1;
    const set = new Set(nums);

    for (const num of nums) {
        if (num > 0 && set.has(-1 * num)) {
            max = Math.max(max, num);
        }
    }

    return max;
};