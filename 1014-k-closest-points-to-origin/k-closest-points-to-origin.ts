function kClosest(points: number[][], k: number): number[][] {
    points.sort((a, b) => distance(a) - distance(b));
    return points.slice(0, k);
}

function distance(point: number[]): number {
    return Math.sqrt(point[0] ** 2 + point[1] ** 2);
}
