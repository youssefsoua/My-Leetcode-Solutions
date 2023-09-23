/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let last = m + n - 1;
  let i = m - 1;
  let j = n - 1;

    while (i >= 0 && j >= 0) {
      if (nums1[i] > nums2[j]) {
        nums1[last] = nums1[i];
        i--;
      } else {
        nums1[last] = nums2[j];
        j--;
      }
      last--;
    }

    while (j >= 0) {
      nums1[last] = nums2[j];
      j--;
      last--;
    }
}