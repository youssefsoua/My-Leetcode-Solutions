function rob(nums: number[]): number {
    if (nums.length <= 3) return Math.max(...nums);

    const robber = (arr: number[]): number => {
        for (let i = arr.length - 3; i >= 0; i--) {
            arr[i] += Math.max(arr[i + 2] ?? 0, arr[i + 3] ?? 0);
        }
        return Math.max(arr[0], arr[1] ?? 0);
    };

    return Math.max(
        robber(nums.slice(0, nums.length - 1)),
        robber(nums.slice(1)),
    );
}
