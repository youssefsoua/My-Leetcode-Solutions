function buildArray(nums: number[]): number[] {
    return nums.map((e, i) => nums[nums[i]]);
};