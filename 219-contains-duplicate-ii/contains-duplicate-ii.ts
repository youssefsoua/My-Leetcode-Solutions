function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const hashMap = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const exist = hashMap.get(nums[i]);

    if (exist !== undefined) {
      if (i - k <= exist) return true;
    }

    hashMap.set(nums[i], i);
  }

  return false;
}
