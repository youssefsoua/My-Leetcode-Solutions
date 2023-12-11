function findSpecialInteger(arr: number[]): number {
    const counter = new Map<number, number>();
    const n = arr.length / 4;

    for (const num of arr) {
        const count: number = (counter.get(num) || 0) + 1;
        if (count > n) return num;
        counter.set(num, count);
    }
}
