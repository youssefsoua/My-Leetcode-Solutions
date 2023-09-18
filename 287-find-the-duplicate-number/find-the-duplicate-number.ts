function findDuplicate(nums: number[]): number {
    let n = nums.length;

    for (let i = 0; i < n; i++) {
        let j = Math.abs(nums[i]);

        if (nums[j] < 0) {
            return j;
        } else {
            nums[j] = -nums[j];
        }
    }

    return n;
}

// function findDuplicate(nums: number[]): number {
//     let n = nums.length;
//     let i = 0;
//     while (i < n) {
//         let j = nums[i];
//         if (j <= n && nums[i] !== nums[j]) {
//             [nums[i], nums[j]] = [nums[j], nums[i]];
//         } else {
//             i++;
//         }
//     }

//     for (let i = 0; i < n; i++) {
//         if (nums[i] <= nums[i - 1]) return nums[i - 1];
//     }
//     return nums.length + 1;
// }

