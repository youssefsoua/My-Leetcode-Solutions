function minOperations(nums: number[], k: number): number {
    let sum = nums[0]
    
    for(let i = 1; i<nums.length; i++){
        sum ^= nums[i]
    }
    
    let diff = sum ^ k;
    let operations = 0;

    while (diff > 0) {
        operations += diff & 1;
        diff >>= 1;
    }

    return operations;
    
};