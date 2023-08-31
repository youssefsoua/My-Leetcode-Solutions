function threeSum(nums: number[]): number[][] {
    nums.sort((a, b) => a - b);

    const result: number[][] = [];
    const n = nums.length;

    for (let i = 0; i < n - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue; // Skip duplicates of the current value
        }

        let left = i + 1;
        let right = n - 1;

        while (left < right) {
            if(nums[i]>=0 && nums[left]>0 && nums[right]>0) break
            
            const sum = nums[i] + nums[left] + nums[right];

            if (sum < 0) {
                left++;
            } else if (sum > 0) {
                right--;
            } else {
                result.push([nums[i], nums[left], nums[right]]);
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;
                left++;
                right--;
            }
        }
    }

    return result;
}
