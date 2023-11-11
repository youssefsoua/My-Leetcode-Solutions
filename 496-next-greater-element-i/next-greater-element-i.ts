function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    const map = new Map<number, number>();
    const stack: number[] = [];
    const res: number[] = [];

    for (let i = nums2.length - 1; i >= 0; i--) {
        while (stack.length && nums2[i] > nums2[stack[stack.length - 1]]) {
            stack.pop();
        }

        if (stack.length) map.set(nums2[i], nums2[stack[stack.length - 1]]);
        else map.set(nums2[i], -1);

        stack.push(i);
    }

    for (const num of nums1) {
        res.push(map.get(num));
    }
    
    return res;
}
