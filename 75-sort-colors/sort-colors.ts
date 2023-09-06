/**
 Do not return anything, modify nums in-place instead.
 */

function sortColors(nums: number[]): void {
    const n: number = nums.length;
    let zero: number = 0;
    let two: number = n - 1;
    let index: number = n - 1;

    while (index > zero) {
        while (index > zero && nums[zero] === 0) zero++;
        if (nums[index] === 0)
            [nums[index], nums[zero]] = [nums[zero], nums[index]];
        index--;
    }

    while (index < two) {
        while (index < two && nums[two] === 2) two--;
        if (nums[index] === 2)
            [nums[index], nums[two]] = [nums[two], nums[index]];
        index++;
    }
}


/**
function sortColors(nums: number[]): void {
    const n: number = nums.length;
    let zero: number = 0;
    let two: number = n - 1;
    let index: number = 0;

    while (index <= two) {
        if (nums[index] === 0) {
            // Swap nums[index] with nums[zero]
            [nums[index], nums[zero]] = [nums[zero], nums[index]];
            zero++;
            index++;
        } else if (nums[index] === 2) {
            // Swap nums[index] with nums[two]
            [nums[index], nums[two]] = [nums[two], nums[index]];
            two--;
        } else {
            index++;
        }
    }
}
 */