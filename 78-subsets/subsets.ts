function subsets(nums: number[]): number[][] {
    const result: number[][] = [];

    const subsetsCreator = (nums: number[], subset: number[]) => {
        result.push([...subset]);
        for (let i = 0; i < nums.length; i++) {
            subset.push(nums[i]);
            subsetsCreator(nums.slice(i + 1), subset);
            subset.pop();
        }
    };

    subsetsCreator(nums, []);

    return result;
}
