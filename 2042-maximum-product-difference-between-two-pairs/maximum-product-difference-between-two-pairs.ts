function maxProductDifference(nums: number[]): number {
    let min1: number = 0;
    let min2: number = 0;
    let max1: number = 0;
    let max2: number = 0;

    let min: number = Infinity;
    let max: number = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < min) {
            min1 = i;
            min = nums[i];
        }

        if (nums[i] > max) {
            max1 = i;
            max = nums[i];
        }
    }

    min = Infinity;
    max = 0;

    for (let i = 0; i < nums.length; i++) {
        if (i !== min1 && nums[i] < min) {
            min2 = i;
            min = nums[i];
        }

        if (i !== max1 && nums[i] > max) {
            max2 = i;
            max = nums[i];
        }
    }

    return nums[max1] * nums[max2] - nums[min1] * nums[min2];
}
