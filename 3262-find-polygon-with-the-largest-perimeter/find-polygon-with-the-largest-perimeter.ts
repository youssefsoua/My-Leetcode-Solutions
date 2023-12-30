function largestPerimeter(nums: number[]): number {
    const n = nums.length;
    let sum: number = 0;

    nums.sort((a, b) => a - b);

    for (let i = 0; i < n; i++) {
        sum += nums[i];
    }

    for (let i = n - 1; i >= 2; i--) {
        if (sum - nums[i] > nums[i]) return sum;
        sum -= nums[i];
    }

    return -1;
}
