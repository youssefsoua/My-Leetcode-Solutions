function findMatrix(nums: number[]): number[][] {
    const counter = new Map<number, number>();
    const result: number[][] = [];

    for (const num of nums) {
        const count = counter.get(num) || 0;
        if (!result[count]) result[count] = [];
        result[count].push(num);
        counter.set(num, count + 1);
    }
    return result;
}
