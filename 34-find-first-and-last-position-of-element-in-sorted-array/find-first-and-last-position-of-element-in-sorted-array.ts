function searchRange(nums: number[], target: number): number[] {
    let low = 0;
    let high = nums.length - 1;
    const result = [-1, -1];

    while (low <= high) {
        const mid = Math.floor((high + low) / 2);
        if (nums[mid] === target) {
            let left = mid;
            while (left >= 0 && nums[left - 1] === target) {
                left--;
            }
            result[0] = left;

            let right = mid;
            while (right < nums.length && nums[right + 1] === target) {
                right++;
            }
            result[1] = right;

            return result;
        } else if (nums[mid] > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return result;
}



/*
function searchRange(nums: number[], target: number): number[] {
    let left = 0;
    let right = nums.length - 1;
    const result = [];

    while (left <= right) {
        if (nums[left] === target) {
            result.push(left);
            break;
        }
        left++;
    }

    while (left <= right) {
        if (nums[right] === target) {
            result.push(right);
            break;
        }
        right--;
    }

    return result.length ? result : [-1, -1];
}
*/