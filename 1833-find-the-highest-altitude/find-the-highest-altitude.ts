function largestAltitude(gain: number[]): number {
    let max: number = 0;
    let altitude: number = 0;
    for (let i = 0; i < gain.length; i++) {
        altitude += gain[i];
        max = Math.max(max, altitude);
    }
    return max;
}
