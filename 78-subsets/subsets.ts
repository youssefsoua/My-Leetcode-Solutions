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


/**
function subsets(nums: number[]): number[][] {
    const n = nums.length;
    const result: number[][] = [[]];

    for (let i = 0; i < n; i++) {
        const c = result.length;
        for (let j = 0; j < c; j++) {
            const e = [...result[j], nums[i]];
            result.push(e);
        }
    }
    return result;
}
 */