function numSubarrayProductLessThanK(nums: number[], k: number): number {
    if (k < 2) return 0;

    let start: number = 0;
    let end: number = 0;
    let count: number = 0;
    let product: number = 1;

    while (end < nums.length) {
        product *= nums[end];
        end++;

        while (product >= k) {
            product /= nums[start];
            start++;
        }

        count += end - start + 1;
    }

    return count - nums.length;
};