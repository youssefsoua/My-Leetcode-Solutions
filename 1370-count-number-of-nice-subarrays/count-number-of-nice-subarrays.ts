function numberOfSubarrays(nums: number[], k: number): number {
    const n = nums.length;
    let result = 0;
    let sum = 0
    let j = 0;

    for (let i = 0; i < n; i++) {
        if (nums[i] % 2) sum++;

        while (sum > k) {
            if (nums[j] % 2) sum--;
            j++;
        }

        if (sum === k) result++;

        let x = j;
        while (nums[x] % 2 === 0 && sum === k && x <= i) {
            result++;
            x++;
        }
    }

    return result;
};