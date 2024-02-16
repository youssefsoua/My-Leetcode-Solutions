function findLeastNumOfUniqueInts(arr: number[], k: number): number {
    const counter = new Map<number, number>();

    for (const e of arr) {
        counter.set(e, (counter.get(e) || 0) + 1);
    }

    const counts: number[] = Array.from(counter.values()).sort((a, b) => a - b);

    const n: number = counts.length;

    let i: number = 0;

    while (k > 0) {
        if (k - counts[i] >= 0) {
            k -= counts[i];
            i++;
        } else {
            k = 0;
        }
    }

    return n - i;
}
