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

/*
function maxSubArray(nums: number[]): number {
    let maxEndingHere = nums[0];
    let maxSoFar = nums[0];

    for (let i = 1; i < nums.length; i++) {
        maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }

    return maxSoFar;
}


Kadane's algorithm works by keeping track of the maximum subarray ending at each position and the maximum subarray found so far. It iterates through the array once, calculating the maximum ending at the current position and updating the overall maximum if needed.

Both the original sliding window solution and the Kadane's algorithm approach are valid and efficient. The choice between them often comes down to personal preference and readability. Kadane's algorithm is known for its simplicity and is often preferred for its elegant solution.


*/