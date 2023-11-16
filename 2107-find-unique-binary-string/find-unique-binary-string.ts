function findDifferentBinaryString(nums: string[]): string {
  const n: number = nums[0].length;
  if(n === 1) return nums[0] === "0" ? "1" : "0";

  const elements = new Set<number>();

  for (const num of nums) {
    elements.add(parseInt(num, 2));
  }

  for (let i = 0; i < n ** 2; i++) {
    if (!elements.has(i)) return i.toString(2).padStart(n, "0");
  }
}
