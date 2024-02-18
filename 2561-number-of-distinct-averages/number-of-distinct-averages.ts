function distinctAverages(nums: number[]): number {
    const n = nums.length;

    const set = new Set<number>();

    nums.sort((a, b) => a - b);

    for (let i = 0; i < n / 2; i++) {
        const avg = (nums[i] + nums[n - i - 1]) / 2;
        set.add(avg);
    }

    return set.size;
}
