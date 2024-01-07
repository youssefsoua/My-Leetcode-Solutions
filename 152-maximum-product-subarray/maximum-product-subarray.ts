function maxProduct(nums: number[]): number {
    let max = nums[0], min = nums[0], result = nums[0];
    for(let i = 1; i < nums.length; i++){
        let tempMax = Math.max(nums[i], max * nums[i], min * nums[i]);
        let tempMin = Math.min(nums[i], max * nums[i], min * nums[i]);
        max = tempMax;
        min = tempMin;
        result = Math.max(result, max);
    }
    return result;
};
