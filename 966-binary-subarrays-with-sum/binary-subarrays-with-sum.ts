function slidingWindowAtMost(nums: number[], goal: number): number {
    let start = 0;
    let currentSum = 0;
    let totalCount = 0;

    // Iterate through the array using a sliding window approach
    for (let end = 0; end < nums.length; end++) {
        currentSum += nums[end];

        // Adjust the window by moving the start pointer to the right
        // until the sum becomes less than or equal to the goal
        while (start <= end && currentSum > goal) {
            currentSum -= nums[start++];
        }

        // Update the total count by adding the length of the current subarray
        totalCount += end - start + 1;
    }
    return totalCount;
}

function numSubarraysWithSum(nums: number[], goal: number): number {
    return slidingWindowAtMost(nums, goal) - slidingWindowAtMost(nums, goal - 1);
}