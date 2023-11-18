function maxFrequency(nums: number[], k: number): number {
    nums.sort((a, b) => a - b);

    let max: number = 1;
    let left: number = 0;

    let curr = 0;

    for (let right = 0; right < nums.length; right++) {
        let target = nums[right];
        curr += target;

        while ((right - left + 1) * target - curr > k) {
            curr -= nums[left];
            left++;
        }

        max = Math.max(max, right - left + 1);
    }

    return max;
}
