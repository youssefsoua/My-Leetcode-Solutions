function minPairSum(nums: number[]): number {
    nums.sort((a, b) => a - b);

    let right: number = nums.length - 1;
    let left: number = 0;

    let max: number = 0;

    while (left < right) {
        max = Math.max(max, nums[left] + nums[right]);
        left++;
        right--;
    }

    return max;
}
