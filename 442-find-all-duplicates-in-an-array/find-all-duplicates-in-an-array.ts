function findDuplicates(nums: number[]): number[] {
    const set = new Set<number>(nums);
    const result: number[] = [];

    for (const num of nums) {
        if (set.has(num)) set.delete(num);
        else result.push(num);
    }

    return result;
};