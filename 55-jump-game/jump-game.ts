function canJump(nums: number[], index: number = 0, memo: { [key: number]: boolean } = {}): boolean {
    if (index in memo) return memo[index];
    if (index >= nums.length - 1) return true;
    if (nums[index] === 0) return false;

    let finish = false;

    for (let i = nums[index]; i >= 1; i--) {
        finish = finish || canJump(nums, i + index, memo);
    }
    memo[index] = finish;

    return finish;
}


