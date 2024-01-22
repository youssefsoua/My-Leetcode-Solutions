function findErrorNums(nums: number[]): number[] {
    const counter = new Map<number, number>();
    const result: number[] = [];

    for (let i = 0; i < nums.length; i++) {
        counter.set(nums[i], (counter.get(nums[i]) || 0) + 1);
    }

    for (let i = 1; i <= nums.length; i++) {
        const num = counter.get(i);
        if (!num) result[1] = i;
        if (num > 1) result[0] = i;
    }

    return result;
};