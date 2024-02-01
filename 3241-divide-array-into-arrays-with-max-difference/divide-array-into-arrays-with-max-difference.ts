function divideArray(nums: number[], k: number): number[][] {
    nums.sort((a, b) => a - b);
    const ans: number[][] = [];
    for (let i = 0; i < nums.length; i += 3) {
        if (nums[i + 2] - nums[i] > k) {
            return [];
        }
        ans.push([nums[i], nums[i + 1], nums[i + 2]]);
    }
    return ans;
};

/*
function divideArray(nums: number[], k: number): number[][] {
    nums.sort((a, b) => a - b);
    let possible = true;
    const result: number[][] = [];
    const n: number = nums.length / 3;

    for (let i = 0; i < n; i++) {
        const startIndex: number = i * 3;
        const endIndex: number = i * 3 + 2;
        if (nums[endIndex] - nums[startIndex] > k) {
            possible = false;
            break;
        } else {
            for (let j = 0; j < 3; j++) {
                const index: number = 3 * i + j;
                if (!result[i]) result[i] = [];
                result[i].push(nums[index]);
            }
        }
    }

    return possible ? result : [];
};

*/