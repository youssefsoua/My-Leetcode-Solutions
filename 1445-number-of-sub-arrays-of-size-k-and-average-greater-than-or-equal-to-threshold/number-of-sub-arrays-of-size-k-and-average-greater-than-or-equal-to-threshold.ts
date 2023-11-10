function numOfSubarrays(arr: number[], k: number, threshold: number): number {
    let left = 0;
    let right = 0;
    let sum = 0;
    let result = 0;

    while (right < arr.length) {
        sum += arr[right];
        right++;

        while (right - left > k) {
            sum -= arr[left];
            left++;
        }
        if (right - left === k && sum / k >= threshold) result++;
    }
    return result;
}
