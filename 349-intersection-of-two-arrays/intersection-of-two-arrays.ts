function intersection(nums1: number[], nums2: number[]): number[] {
    const result: number[] = [];

    const set1 = new Set<number>(nums1);
    const set2 = new Set<number>(nums2);

    const intersection = (set1: Set<number>, set2: Set<number>) => {
        for (const e of set2) {
            if (set1.has(e)) result.push(e);
        }
    }

    if (set1.size > set2.size) {
        intersection(set1, set2);
    } else {
        intersection(set2, set1);
    }

    return result;
}
