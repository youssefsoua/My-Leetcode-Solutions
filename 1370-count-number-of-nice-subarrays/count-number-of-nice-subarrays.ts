function numberOfSubarrays(nums: number[], k: number): number {
    const n = nums.length;
    let count = 0;
    let oddCount = 0;
    let left = 0;

    for (let right = 0; right < n; right++) {
        // Increment the odd count if the current number is odd
        if (nums[right] % 2 !== 0) {
            oddCount++;
        }

        // Shrink the window from the left until the odd count is less than or equal to k
        while (oddCount > k) {
            if (nums[left] % 2 !== 0) {
                oddCount--;
            }
            left++;
        }

        // If the odd count is exactly k, increment the result
        if (oddCount === k) {
            count++;
        }

        // Check for additional subarrays ending at 'right' with exactly k odd numbers
        let tempLeft = left;
        while (nums[tempLeft] % 2 === 0 && oddCount === k && tempLeft <= right) {
            count++;
            tempLeft++;
        }
    }

    return count;
}
