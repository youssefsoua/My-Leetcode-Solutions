function search(nums: number[], target: number): number {
    let low = 0;
    let high = nums.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);

        if (nums[mid] === target) {
            return mid;
        }

        if (nums[mid] < nums[high]) { //checks if the right half of the current search range is sorted. If it is, it means that the right half is in ascending order.
            if (target > nums[mid] && target <= nums[high]) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        } else {
            if (target < nums[mid] && target >= nums[low]) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
    }

    return -1;
}
