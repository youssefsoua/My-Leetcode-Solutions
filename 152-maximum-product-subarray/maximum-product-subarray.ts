function maxProduct(nums: number[]): number {
    const n = nums.length;
    let max = -Infinity;
    let product = 1;
    for(let i = 0; i < n; i++){
        product *= nums[i];
        max = Math.max(max, product);
        if(product === 0) product = 1;
    }
    product = 1;
    for(let i = n-1; i >= 0; i--){
        product *= nums[i];
        max = Math.max(max, product);
        if(product === 0) product = 1;
    }
    return max;
};
