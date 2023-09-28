function minSubArrayLen(target: number, nums: number[]): number {
    let min = Infinity;
    let sum = 0;
    let left = 0;
    let right = 0;

    while (left < nums.length) {
        sum += nums[left];
        left++;
        while (sum >= target) {
            min = Math.min(min, left - right);
            sum -= nums[right];
            right++;
        }
    }

    return min === Infinity ? 0 : min;
}
