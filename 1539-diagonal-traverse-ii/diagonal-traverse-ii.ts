function findDiagonalOrder(nums: number[][]): number[] {
    const groups: { [key: number]: number[] } = {};

    for (let row = nums.length - 1; row >= 0; row--) {
        for (let col = 0; col < nums[row].length; col++) {
            const diagonal = row + col;
            groups[diagonal] = groups[diagonal] || [];
            groups[diagonal].push(nums[row][col]);
        }
    }

    const ans: number[] = [];
    let curr = 0;

    while (groups[curr] !== undefined) {
        ans.push(...groups[curr]);
        curr++;
    }

    return ans;
}