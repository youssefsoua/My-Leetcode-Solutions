/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
    const n = nums.length
    let zero = 0
    let two = n-1
    let index = n - 1

    while(index>zero){
        while(index>zero && nums[zero] === 0) zero++
        if(nums[index] === 0){
            const temp = nums[zero]
            nums[zero] = nums[index]
            nums[index] = temp
        }           
        index--
    }

    while(index<two){
        while(index<two && nums[two] === 2) two--
        if(nums[index] === 2){
            const temp = nums[two]
            nums[two] = nums[index]
            nums[index] = temp
        }           
        index++
    }

};