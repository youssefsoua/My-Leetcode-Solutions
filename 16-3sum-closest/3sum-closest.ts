function threeSumClosest(nums: number[], target: number): number {
    nums.sort((a, b) => a - b);
    const n: number = nums.length;
    let result: number = Infinity;

    for (let i = 0; i < n - 2; i++) {
        let left: number = i + 1;
        let right: number = n - 1;

        while (left < right) {
            const sum: number = nums[i] + nums[left] + nums[right];
            if (Math.abs(target - result) > Math.abs(target - sum))
                result = sum;
            if (sum > target) right--;
            else left++;
        }
    }

    return result;
}
