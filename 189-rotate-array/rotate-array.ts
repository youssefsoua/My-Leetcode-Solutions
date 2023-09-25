/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    const reverse = (
        nums: number[],
        startingIndex: number,
        endingIndex: number,
    ) => {
        while (startingIndex < endingIndex) {
            [nums[startingIndex++], nums[endingIndex--]] = [nums[endingIndex], nums[startingIndex]];
        }
    };

    const l = nums.length;
    const n = k % l;

    if (n) {
        reverse(nums, 0, l - 1);
        reverse(nums, 0, n - 1);
        reverse(nums, n, l - 1);
    }
}
