function longestOnes(nums: number[], k: number): number {
    let max: number = 0;
    let left: number = 0;

    for (let right = 0; right < nums.length; right++) {
        if (!nums[right]) k--;

        while (k < 0) {
            if (!nums[left]) k++;
            left++;
        }

        max = Math.max(max, right - left + 1);
    }

    return max;
}
