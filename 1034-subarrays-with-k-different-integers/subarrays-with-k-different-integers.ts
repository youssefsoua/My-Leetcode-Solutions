function subarraysWithKDistinct(nums: number[], k: number): number {
    return slidingWindowAtMost(nums, k) - slidingWindowAtMost(nums, k - 1);
};

function slidingWindowAtMost(nums: number[], k: number): number {
    const counter = new Map<number, number>();
    let start: number = 0;
    let end: number = 0;
    let result: number = 0;

    while (end < nums.length) {
        counter.set(nums[end], (counter.get(nums[end]) || 0) + 1);
        end++;

        while (counter.size > k) {
            const count: number = counter.get(nums[start]) - 1;

            if (count) counter.set(nums[start], count);
            else counter.delete(nums[start]);

            start++;
        }

        result += end - start + 1;
    }

    return result;
};