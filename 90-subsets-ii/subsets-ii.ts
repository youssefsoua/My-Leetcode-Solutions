function subsetsWithDup(nums: number[]): number[][] {
    const result: number[][] = [];
    nums.sort((a, b) => a - b);

    const backtrack = (
        nums: number[],
        index: number,
        subset: number[],
    ): void => {
        if (index <= nums.length) {
            result.push([...subset]);

            while (index < nums.length) {
                subset.push(nums[index]);
                backtrack(nums, index + 1, subset);
                subset.pop();
                index++;
                while (index > 0 && nums[index] === nums[index - 1]) index++;
            }
        }
    };

    backtrack(nums, 0, []);

    return result;
}
