function getSumAbsoluteDifferences(nums: number[]): number[] {
    const n = nums.length;
    const prefix: number[] = [];
    const suffix: number[] = [];
    const result: number[] = [];

    for (let i = 0; i < n; i++) {
        prefix[i] = (nums[i - 1] || 0) + (prefix[i - 1] || 0);
        suffix[n - 1 - i] = (nums[n - i] || 0) + (suffix[n - i] || 0);
    }

    for (let i = 0; i < n; i++) {
        result[i] =
            nums[i] * i - prefix[i] + (suffix[i] - nums[i] * (n - i - 1));
    }

    return result;
}
