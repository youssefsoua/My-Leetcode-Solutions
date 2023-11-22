function findDiagonalOrder(nums: number[][]): number[] {
    // Map to store groups of elements based on diagonal position
    const groups = new Map<number, number[]>();

    // Iterate through the 2D array from bottom-left to top-right
    for (let row = nums.length - 1; row >= 0; row--) {
        for (let col = 0; col < nums[row].length; col++) {
            // Calculate the diagonal position for the current element
            const diagonal = row + col;

            // Retrieve or create a group for the current diagonal
            const group = groups.get(diagonal);
            if (group) {
                // If the group exists, add the current element to it
                group.push(nums[row][col]);
            } else {
                // If the group does not exist, create a new group with the current element
                groups.set(diagonal, [nums[row][col]]);
            }
        }
    }

    // Array to store the final result in diagonal order
    const ans: number[] = [];
    let curr = 0;

    // Concatenate the elements from each diagonal group to the result array
    while (groups.has(curr)) {
        ans.push(...groups.get(curr));
        curr++;
    }

    // Return the final array containing elements in diagonal order
    return ans;
}
