function subsets(nums: number[]): number[][] {
    const result: number[][] = [[]];
    const n = nums.length;

    for (let i = 0; i < n; i++) {
        const m = result.length;
        for (let j = 0; j < m; j++) {
            result.push([...result[j], nums[i]]);
        }
    }

    return result;
};
