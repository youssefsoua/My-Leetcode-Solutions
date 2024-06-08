function checkSubarraySum(nums: number[], k: number): boolean {
    const map = new Map<number, number>();
    let sum = 0;

    // Initialize the map with a base case
    map.set(0, -1);

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        const mod = sum % k;

        if (map.has(mod)) {
            if (i - map.get(mod)! > 1) {
                return true;
            }
        } else {
            map.set(mod, i);
        }
    }

    return false;
}
