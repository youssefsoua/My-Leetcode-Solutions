function subarraysDivByK(nums: number[], k: number): number {
    let count = 0;
    let prefixSum = 0;
    const remainderMap = new Map();
    remainderMap.set(0, 1);

    for (let num of nums) {
        prefixSum += num;
        let remainder = ((prefixSum % k) + k) % k; // Handle negative remainders

        if (remainderMap.has(remainder)) {
            count += remainderMap.get(remainder);
        }

        remainderMap.set(remainder, (remainderMap.get(remainder) || 0) + 1);
    }

    return count;
}
