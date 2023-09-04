function productExceptSelf(nums: number[]): number[] {
    const result:number[] = [1]

    for(let i = 0; i<nums.length-1; i++){
        result.push(nums[i]*result[result.length-1])
    }

    let suffix = nums[nums.length-1]
    for(let i=nums.length-2; i>=0; i--){
        result[i]= result[i] * suffix
        suffix *= nums[i]
    }

    return result
};
