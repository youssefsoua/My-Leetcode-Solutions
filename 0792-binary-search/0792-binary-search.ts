function search(nums: number[], target: number): number {
    let low = 0;
    let high = nums.length - 1;

    while (low <= high) {
        const mid = low + Math.floor((high - low) / 2);

        if (nums[mid] === target) {
            return mid; // Return if target is found
        } else if (nums[mid] > target) {
            high = mid - 1; // Adjust the high pointer
        } else {
            low = mid + 1; // Adjust the low pointer
        }
    }

    return nums[low] === target ? low : -1; // Check the low pointer value
}
