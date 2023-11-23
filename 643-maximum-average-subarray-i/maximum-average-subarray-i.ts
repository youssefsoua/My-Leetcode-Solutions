function findMaxAverage(nums: number[], k: number): number {
    let left: number = 0;
    let max: number = -Infinity;
    let sum: number = 0;

    for (let right = 0; right < nums.length; right++) {
        sum += nums[right];

        if (right - left + 1 === k) {
            max = Math.max(max, sum / k);
            sum -= nums[left];
            left++;
        }
    }
    return max;
}
