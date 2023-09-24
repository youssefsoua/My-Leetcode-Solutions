function removeDuplicates(nums: number[]): number {
    const n = nums.length;
    if (n <= 2) return n;

    let index = 2;

    for (let i = 2; i < n; i++) {
        if (
            nums[i] !== nums[i - 1] ||
            (nums[i] === nums[i - 1] && nums[i] !== nums[index - 2])
        ) {
            nums[index] = nums[i];
            index++;
        }
    }
    return index;
}
