function getSumAbsoluteDifferences(nums: number[]): number[] {
    const n = nums.length;
    const result: number[] = new Array(n);
    let prefixSum = 0;
    let suffixSum = nums.reduce((acc, num) => acc + num, 0);

    for (let i = 0; i < n; i++) {
        result[i] = nums[i] * i - prefixSum + (suffixSum - nums[i] * (n - i));
        prefixSum += nums[i];
        suffixSum -= nums[i];
    }

    return result;
}
