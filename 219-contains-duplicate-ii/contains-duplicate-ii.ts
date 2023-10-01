function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const numSet = new Set<number>();

  for (let i = 0; i < nums.length; i++) {
    if (i > k) {
      numSet.delete(nums[i - k - 1]); // Remove the number outside the window
    }

    if (numSet.has(nums[i])) {
      return true; // Found a duplicate within the window
    }

    numSet.add(nums[i]); // Add the current number to the set
  }

  return false;
}


// function containsNearbyDuplicate(nums: number[], k: number): boolean {
//   const hashMap = new Map<number, number>();

//   for (let i = 0; i < nums.length; i++) {
//     const exist = hashMap.get(nums[i]);

//     if (exist !== undefined) {
//       if (i - k <= exist) return true;
//     }

//     hashMap.set(nums[i], i);
//   }

//   return false;
// }
