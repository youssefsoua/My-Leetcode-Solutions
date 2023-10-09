function searchRange(nums: number[], target: number): number[] {
    let left = 0;
    let right = nums.length - 1;
    const result = [];

    while (left <= right) {
        if (nums[left] === target) {
            result.push(left);
            break;
        }
        left++;
    }

    while (left <= right) {
        if (nums[right] === target) {
            result.push(right);
            break;
        }
        right--;
    }

    return result.length ? result : [-1, -1];
}
