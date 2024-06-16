function minPatches(nums: number[], n: number): number {
    let miss = 1;
    let result = 0;
    let i = 0;

    while (miss <= n) {
        if (i < nums.length && nums[i] <= miss) {
            miss += nums[i];
            i++;
        } else {
            miss += miss;
            result++;
        }
    }

    return result;
};
