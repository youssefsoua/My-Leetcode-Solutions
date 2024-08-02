function minSwaps(nums: number[]): number {
     // Initialize minimum swaps to a large value
        let minimumSwaps = Infinity;

        // Calculate the total number of 1s in the array
        let totalOnes = 0;
        for (const num of nums) {
            totalOnes += num;
        }

        // Initialize the count of 1s in the current window
        let onesCount = nums[0];
        let end = 0;

        // Slide the window across the array
        for (let start = 0; start < nums.length; ++start) {
            // Adjust onesCount by removing the element that is sliding out of
            // the window
            if (start != 0) {
                onesCount -= nums[start - 1];
            }

            // Expand the window to the right until it reaches the desired size
            while (end - start + 1 < totalOnes) {
                end++;
                onesCount += nums[end % nums.length];
            }

            // Update the minimum number of swaps needed
            minimumSwaps = Math.min(minimumSwaps, totalOnes - onesCount);
        }

        return minimumSwaps;
};