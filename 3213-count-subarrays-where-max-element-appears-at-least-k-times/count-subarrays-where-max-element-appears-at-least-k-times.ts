function countSubarrays(nums: number[], k: number): number {
    const maxElement: number = Math.max(...nums);

    let start: number = 0;
    let end: number = 0;
    let count: number = 0;
    let result: number = 0;

    while (end < nums.length) {
        if (nums[end] === maxElement) count++;
        end++;

        while (count === k) {
            if (nums[start] === maxElement) {
                count--;
            }
            start++;
        }

        result += start;
    }

    return result;
};