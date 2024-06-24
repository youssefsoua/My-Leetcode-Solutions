function minKBitFlips(nums: number[], k: number): number {
    let currentFlips = 0; // Tracks the current number of flips
    let totalFlips = 0; // Tracks the total number of flips

    for (let i = 0; i < nums.length; ++i) {
        // If the window slides out of the range and the leftmost element is
        // marked as flipped (2), decrement currentFlips
        if (i >= k && nums[i - k] == 2) {
            currentFlips--;
        }

        // Check if the current bit needs to be flipped
        if ((currentFlips % 2) == nums[i]) {
            // If flipping would exceed array bounds, return -1
            if (i + k > nums.length) {
                return -1;
            }
            // Mark the current bit as flipped
            nums[i] = 2;
            currentFlips++;
            totalFlips++;
        }
    }

    return totalFlips;
};