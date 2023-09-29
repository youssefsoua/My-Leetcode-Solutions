function isMonotonic(nums: number[]): boolean {
    if (nums.length <= 2) return true;

    let i = 0;
    let j = 1;

    while (nums[i] === nums[j] && j < nums.length) {
        i++;
        j++;
    }

    let monoType = nums[i] < nums[j];

    for (let index = j; index < nums.length; index++) {
        if (monoType) {
            if (nums[index - 1] > nums[index]) return false;
        } else {
            if (nums[index - 1] < nums[index]) return false;
        }
    }

    return true;
}


/*
function isMonotonic(nums: number[]): boolean {
    let increasing = true;
    let decreasing = true;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            decreasing = false;
        } else if (nums[i] < nums[i - 1]) {
            increasing = false;
        }

        if (!increasing && !decreasing) {
            return false;
        }
    }

    return true;
}
 */