function reductionOperations(nums: number[]): number {
    const n: number = nums.length;

    if (n === 1) return 0;

    nums.sort((a, b) => b - a);

    let last = nums.length - 1;
    while (nums[last] === nums[last - 1]) {
        last--;
    }

    let count: number = 0;
    for (let i = 0; i < last; i++) {
        while (i < last && nums[i] === nums[i + 1]) {
            i++;
        }
        count += (i + 1);
    }

    return count;
}