function replaceElements(arr: number[]): number[] {
    let max: number = -1;
    for (let i = arr.length - 1; i >= 0; i--) {
        let current = arr[i];
        arr[i] = max;
        max = Math.max(current, max);
    }
    return arr;
}
