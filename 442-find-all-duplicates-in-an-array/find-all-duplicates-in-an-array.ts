function findDuplicates(nums: number[]): number[] {
    const set = new Set<number>(nums);

    for (const num of nums) {
        if (set.has(num)) set.delete(num);
        else set.add(num);
    }

    return Array.from(set);
};