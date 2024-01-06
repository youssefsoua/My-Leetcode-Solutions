function missingInteger(nums: number[]): number {   
    // The purpose of this function is to find the smallest missing integer in the array

    // The first part of the function finds the longest sequential prefix
    let prefix_sum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1] + 1) {
            // If the current number is one more than the previous number, add it to the prefix sum
            prefix_sum += nums[i];
        } else {
            // If the current number is not one more than the previous number, break the loop
            break;
        }
    }

    // The second part of the function finds the smallest missing integer greater than or equal to prefix_sum
    // It first creates a set from the array of numbers
    const set = new Set<number>(nums)
    // It initializes the missing number as the prefix sum
    let missing = prefix_sum ;
    // It then increments the missing number until it finds a number that is not in the set
    while (set.has(missing)) {
        missing += 1;
    }

    // The function returns the smallest missing integer
    return missing;
};
