function firstMissingPositive(nums: number[]): number {
    let n: number = nums.length;
    let i: number = 0;
    
    while (i < n) {
        let j: number = nums[i] - 1;

        while (nums[i] > 0 && nums[i] <= n && nums[i] !== nums[j]) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            j = nums[i] - 1;
        }

        i++;
    }

    for (let i = 0; i < n; i++) {
        if (nums[i] !== i + 1) return i + 1;
    }

    return nums.length + 1;
};

