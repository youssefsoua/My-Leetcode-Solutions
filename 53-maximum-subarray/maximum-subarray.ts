function maxSubArray(nums: number[]): number {
    const n = nums.length;
    let start = 0;
    let end = 0;
    let max = nums[0];
    let sum = nums[0];

    while (end < n - 1) {
        end++;
        sum += nums[end];

        while (start < end && (nums[start] <= 0 || sum <= 0)) {
            sum -= nums[start];
            start++;
        }

        max = Math.max(max, sum);
    }

    return max;
}
