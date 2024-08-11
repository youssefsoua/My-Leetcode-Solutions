function longestConsecutive(nums: number[]): number {
    let max = 0;
    const set = new Set(nums);

    for (const num of nums) {
        if (set.has(num)) {
            set.delete(num);
            let current = 1;
            let greater = num + 1;
            let smaller = num - 1;

            while (set.has(greater)) {
                set.delete(greater);
                greater++;
                current++;
            }

            while (set.has(smaller)) {
                set.delete(smaller);
                smaller--;
                current++;
            }

            max = Math.max(max, current);
        }

    }

    return max;
};