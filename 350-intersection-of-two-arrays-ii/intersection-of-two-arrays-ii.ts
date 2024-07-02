function intersect(nums1: number[], nums2: number[]): number[] {
    return nums1.length > nums2.length ? findIntersection(nums2, nums1) : findIntersection(nums1, nums2);
};

function findIntersection(small: number[], big: number[]): number[] {
    const map = new Map<number, number>();
    const result = [];

    for (const e of small) {
        map.set(e, (map.get(e) || 0) + 1);
    }

    for (const e of big) {
        const exist = map.get(e);

        if (exist) result.push(e);

        if (exist === 1) map.delete(e);
        else map.set(e, exist - 1);
    }

    return result;
};

