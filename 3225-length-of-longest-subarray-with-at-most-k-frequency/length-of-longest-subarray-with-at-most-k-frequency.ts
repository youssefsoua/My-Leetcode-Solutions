function maxSubarrayLength(nums: number[], k: number): number {
    let start = 0;
    let end = 0;
    let maxLength = 0;
    const frequencyMap = new Map<number, number>();

    while (end < nums.length) {
        const count = (frequencyMap.get(nums[end]) || 0) + 1;
        frequencyMap.set(nums[end], count);
        end++;

        while (frequencyMap.get(nums[end - 1]) > k) {
            const currentCount = frequencyMap.get(nums[start]);
            if (nums[start] === nums[end - 1]) {
                frequencyMap.set(nums[start], count - 1);
            } else {
                frequencyMap.set(nums[start], currentCount - 1);
            }
            start++;
        }

        maxLength = Math.max(maxLength, end - start);
    }

    return maxLength;
}
