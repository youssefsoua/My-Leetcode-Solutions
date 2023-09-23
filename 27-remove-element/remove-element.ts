function removeElement(nums: number[], val: number): number {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        if (nums[left] === val) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
            while (nums[right] === val && left <= right) right--;
        } else {
            left++;
        }
    }

    return left;
}


/**
function removeElement(nums: number[], val: number): number {
    let writeIndex = 0;

    for (let readIndex = 0; readIndex < nums.length; readIndex++) {
        if (nums[readIndex] !== val) {
            nums[writeIndex] = nums[readIndex];
            writeIndex++;
        }
    }

    return writeIndex;
}
 */