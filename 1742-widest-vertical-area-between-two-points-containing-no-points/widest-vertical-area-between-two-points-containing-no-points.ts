function maxWidthOfVerticalArea(points: number[][]): number {
    points.sort((a, b) => a[0] - b[0]);

    let max: number = points[1][0] - points[0][0];

    for (let i = 2; i < points.length; i++) {
        max = Math.max(max, points[i][0] - points[i - 1][0]);
    }

    return max;
}
