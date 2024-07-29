function search(nums: number[], target: number): number {
    const n = nums.length - 1;
    let low = 0;
    let high = n - 1;

    while (low <= high) {
        const mid = low + Math.floor((high - low) / 2);

        if (nums[mid] === target) return mid;

        else if (nums[mid] > target) high = mid - 1;

        else low = mid + 1;
    }

    return nums[low] === target ? low : -1;
};