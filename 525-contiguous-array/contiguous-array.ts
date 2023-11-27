function findMaxLength(nums: number[]): number {
            // Create an array to store the cumulative count of 0s and 1s
        // The array is twice the length of 'nums' to accommodate both positive and negative counts
        const arr: number[] = new Array(2 * nums.length + 1).fill(-2);

        // Initialize the middle element of the array to -1 since initially, there are no elements
        // and the cumulative count is zero
        arr[nums.length] = -1;

        // Initialize variables to track the maximum length and the current count
        let maxlen: number = 0;
        let count: number = 0;

        // Iterate through the 'nums' array
        for (let i = 0; i < nums.length; i++) {
            // Update the count based on the current element in 'nums'
            count = count + (nums[i] === 0 ? -1 : 1);

            // Check if the current count has been encountered before
            if (arr[count + nums.length] >= -1) {
                // If yes, update the maximum length if the current subarray is longer
                maxlen = Math.max(maxlen, i - arr[count + nums.length]);
            } else {
                // If no, record the index of the first occurrence of the current count
                arr[count + nums.length] = i;
            }
        }

        // Return the maximum length of the subarray with an equal number of 0s and 1s
        return maxlen;
};
