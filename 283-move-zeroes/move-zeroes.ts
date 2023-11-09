function moveZeroes(nums: number[]): void {
    let nonZeroIndex = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[nonZeroIndex++] = nums[i];
        }
    }

    for (let i = nonZeroIndex; i < nums.length; i++) {
        nums[i] = 0;
    }
}
