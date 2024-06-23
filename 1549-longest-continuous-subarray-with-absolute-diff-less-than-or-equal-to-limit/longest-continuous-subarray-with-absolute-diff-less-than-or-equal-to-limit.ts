function longestSubarray(nums: number[], limit: number): number {
    const n = nums.length;
    let maxQueue: number[] = [];
    let minQueue: number[] = [];
    let left = 0, right = 0;
    let longestSubArr = 0;

    while (right < n) {
        while (maxQueue.length > 0 && nums[maxQueue[maxQueue.length - 1]] <= nums[right]) {
            maxQueue.pop();
        }
        maxQueue.push(right);

        while (minQueue.length > 0 && nums[minQueue[minQueue.length - 1]] >= nums[right]) {
            minQueue.pop();
        }
        minQueue.push(right);

        while (nums[maxQueue[0]] - nums[minQueue[0]] > limit) {
            left++;
            if (left > maxQueue[0]) {
                maxQueue.shift();
            }
            if (left > minQueue[0]) {
                minQueue.shift();
            }
        }

        longestSubArr = Math.max(longestSubArr, right - left + 1);
        right++;
    }

    return longestSubArr;
}

/*
function longestSubarray(nums: number[], limit: number): number {
    const n = nums.length

    let max = nums[0]
    let maxIndex = 0
    let min = nums[0]
    let minIndex = 0


    let longestSubArr = 0
    let j = 0

    for (let i = 0; i < n; i++) {
        if (max <= nums[i]) {
            max = nums[i]
            maxIndex = i
        }

        if (min >= nums[i]) {
            min = nums[i]
            minIndex = i
        }

        if (max - min > limit) {
            if (max === nums[i]) {
                let x = i - 1
                min = max
                while (x > minIndex && Math.abs(nums[i] - nums[x]) <= limit) {
                    min = Math.min(min, nums[x])
                    x--
                }
                j = x
                minIndex = x
            }
            if (min === nums[i]) {
                let x = i - 1
                max = min
                while (x >= maxIndex && Math.abs(nums[i] - nums[x]) <= limit) {
                    max = Math.max(max, nums[x])
                    x--
                }
                j = x
                maxIndex = x
            }

        }

        longestSubArr = Math.max(longestSubArr, i - j)

    }

    return longestSubArr
};

*/