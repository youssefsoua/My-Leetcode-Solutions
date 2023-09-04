function productExceptSelf(nums: number[]): number[] {
  const n: number = nums.length;
  const result: number[] = new Array(n).fill(1);

  let prefix: number = 1;
  for (let i: number = 0; i < n; i++) {
    result[i] *= prefix;
    prefix *= nums[i];
  }

  let suffix: number = 1;
  for (let i: number = n - 1; i >= 0; i--) {
    result[i] *= suffix;
    suffix *= nums[i];
  }

  return result;
}
