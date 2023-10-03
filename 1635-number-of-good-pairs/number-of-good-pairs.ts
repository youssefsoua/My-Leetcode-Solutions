function numIdenticalPairs(nums: number[]): number {
    const memo = new Map<number, number>();
    const hashMap = new Map<number, number[]>();
    let result = 0;

    const counter = (num: number): number => {
        if (memo.has(num)) return memo.get(num);
        if (!num) return 0;
        const result = counter(num - 1) + num;
        memo.set(num, result);
        return result;
    };

    for (const num of nums) {
        if (hashMap.has(num)) {
            hashMap.get(num)?.push(num);
        } else {
            hashMap.set(num, [num]);
        }
    }

    for (const e of hashMap.values()) {
        result += counter(e.length - 1);
    }

    return result;
}
