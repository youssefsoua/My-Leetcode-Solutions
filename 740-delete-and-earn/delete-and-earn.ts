function deleteAndEarn(nums: number[]): number {
    // Initialize an array to store the sum of values at each index
    const arr: number[] = new Array(10001).fill(0);
    
    // Iterate through the input array and accumulate the sum at each value's index
    for (let i = 0; i < nums.length; i++) {
        arr[nums[i]] += nums[i];
    }

    // Iterate through the array in reverse starting from the third-to-last element
    for (let i = arr.length - 3; i >= 0; i--) {
        // Update the sum at the current index by adding the maximum of the sums at the next two indices
        // The '?? 0' handles cases where the next indices are out of bounds (undefined)
        arr[i] += Math.max(arr[i + 2] ?? 0, arr[i + 3] ?? 0);
    }

    // Return the maximum sum considering the first two indices (0 and 1)
    return Math.max(arr[0], arr[1] ?? 0);
}

/**
//Recursive Solution:

function deleteAndEarn(nums: number[]): number {
    if (nums.length === 0) return 0;
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        const res =
            deleteAndEarn(
                nums.filter(
                    (e, index) =>
                        e !== nums[i] + 1 && e !== nums[i] - 1 && index !== i,
                ),
            ) + nums[i];
        max = Math.max(max, res);
    }
    return max;
}
*/
