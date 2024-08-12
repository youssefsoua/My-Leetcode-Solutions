class KthLargest {
    nums = [];
    k = 0;
    constructor(k: number, nums: number[]) {
        this.nums = nums;
        this.k = k;
    }

    add(val: number): number {
        this.nums.push(val);
        this.nums.sort((a, b) => b - a);
        return this.nums[this.k - 1];
    }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */