function eraseOverlapIntervals(intervals: number[][]): number {
    if (intervals.length === 1) return 0;

    intervals.sort((a, b) => a[1] - b[1]);
    console.log(intervals)

    let left = 0;
    let right = 1;
    let result = 0;

    while (right < intervals.length) {
        if (intervals[left][1] > intervals[right][0]) {
            result++;
        } else {
            while(left < right) left++;
        }
        right++;
    }

    return result;
}
