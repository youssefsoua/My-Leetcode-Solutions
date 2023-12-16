function rob(nums: number[]): number {
    const n: number = nums.length;

    for (let i = n - 3; i >= 0; i--) {
        nums[i] += Math.max(nums[i + 2] ?? 0, nums[i + 3] ?? 0);
    }

    return Math.max(nums[0], nums[1] ?? 0);
}
