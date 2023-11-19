function reductionOperations(nums: number[]): number {
    const n: number = nums.length;

    if (n === 1) return 0; // If the array has only one element, no reduction operations are needed.

    nums.sort((a, b) => b - a); // Sort the array in descending order.

    let last = nums.length - 1;
    while (nums[last] === nums[last - 1]) {
        last--; // Find the index of the last distinct element in the sorted array.
    }

    let count: number = 0;
    for (let i = 0; i < last; i++) {
        while (i < last && nums[i] === nums[i + 1]) {
            i++; // Skip duplicate elements in the sorted array.
        }
        count += (i + 1); // Add the index (plus one) of each distinct element to the count.
    }

    return count; // Return the total count of reduction operations.
}