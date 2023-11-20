function sortedSquares(nums: number[]): number[] {
    const n: number = nums.length;
    const result: number[] = new Array(n);

    let left: number = 0;
    let right: number = n - 1;
    let index: number = n - 1;

    while (left <= right) {
        const leftSquare: number = nums[left] ** 2;
        const rightSquare: number = nums[right] ** 2;

        if (leftSquare > rightSquare) {
            result[index] = leftSquare;
            left++;
        } else {
            result[index] = rightSquare;
            right--;
        }

        index--;
    }

    return result;
};