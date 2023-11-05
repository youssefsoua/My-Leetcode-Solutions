function getWinner(arr: number[], k: number): number {
    let i = 0;
    let j = 1;
    const n = arr.length;
    const counter = new Map();
    let max = 0;

    for (const e of arr) {
        counter.set(e, 0);
        max = Math.max(max, e);
    }

    if (k > n) return max;

    while (true) {
        if (arr[i] === max || arr[j] === max) return max;
        if (arr[i] > arr[j]) {
            const count = counter.get(arr[i]);
            if (count + 1 === k) {
                return arr[i];
            } else {
                counter.set(arr[i], count + 1);
            }

            if (i > j) {
                j = i + 1;
            } else {
                j++;
            }
        } else {
            const count = counter.get(arr[j]);
            if (count + 1 === k) {
                return arr[j];
            } else {
                counter.set(arr[j], count + 1);
            }

            if (j > i) {
                i = j + 1;
            } else {
                i++;
            }
        }
    }
}
