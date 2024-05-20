function subsetXORSum(nums: number[]): number {
    let result = 0;

    const backtrack = (start, currentXOR) => {
        result += currentXOR;

        for (let i = start; i < nums.length; i++) {
            backtrack(i + 1, currentXOR ^ nums[i]);
        }
    };

    backtrack(0, 0);
    return result;
};
