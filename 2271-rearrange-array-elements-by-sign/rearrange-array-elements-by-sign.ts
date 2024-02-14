function rearrangeArray(nums: number[]): number[] {
    const positives: number[] = [];
    const negatives: number[] = [];

    for (const num of nums) {
        if (num > 0) positives.push(num);
        if (num < 0) negatives.push(num);
    }

    let p: number = 0;
    let n: number = 0;

    for (let i = 0; i < nums.length; i++) {
        if (i % 2 === 0) {
            nums[i] = positives[p++];
        } else {
            nums[i] = negatives[n++];
        }
    }

    return nums;
};