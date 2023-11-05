function getWinner(arr: number[], k: number): number {
    const counter = new Map<number, number>();
    let max = 0;

    for (let i = 0, j = 1; i < arr.length && j < arr.length;) {
        const current = arr[i] > arr[j] ? arr[i] : arr[j];
        const count = counter.get(current) || 0;
        counter.set(current, count + 1);

        if (counter.get(current) === k) {
            return current;
        }

        if (arr[i] > arr[j]) {
            if (i > j) {
                j = i + 1;
            } else {
                j++;
            }
        } else {
            if (j > i) {
                i = j + 1;
            } else {
                i++;
            }
        }

        max = Math.max(max, current);
    }

    return max;
}