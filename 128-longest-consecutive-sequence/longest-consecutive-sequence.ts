function longestConsecutive(nums: number[]): number {
  const set = new Set<number>();
  let max: number = 0;

  for (const num of nums) {
    set.add(num);
  }

  for (const num of nums) {
    if (!set.has(num - 1)) {
      let currentSeq: number = 1;
      let currentNum: number = num + 1;
      while (set.has(currentNum)) {
        currentSeq++;
        currentNum++;
      }
      max = Math.max(max, currentSeq);
    }
  }

  return max;
}
