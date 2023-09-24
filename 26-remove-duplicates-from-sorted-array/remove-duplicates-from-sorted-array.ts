function removeDuplicates(nums: number[]): number {
    const n = nums.length;
    
    if (n <= 1) {
        return n;
    }

    let uniqueIndex = 1;

    for (let i = 1; i < n; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[uniqueIndex] = nums[i];
            uniqueIndex++;
        }
    }

    return uniqueIndex;
}
