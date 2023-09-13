function maxArea(height: number[]): number {
    let max: number = 0;
    let low: number = 0;
    let high: number = height.length - 1;

    while (low < high) {
        max = Math.max(max, Math.min(height[low], height[high]) * (high - low));
        if (height[low] >= height[high]) {
            high--;
        } else {
            low++;
        }
    }

    return max;
}
