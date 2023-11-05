function getWinner(arr: number[], k: number): number {
    let i = 0;
    let j = 1;
    const n = arr.length;
    const counter = new Map();
    let max = 0;

    while (i<n && j<n) {
        max = Math.max(arr[i], arr[j])
         if (arr[i] > arr[j]) {
            const count = counter.get(arr[i]);
            if(count === undefined) counter.set(arr[i],1)
            else {
                counter.set(arr[i], count + 1);
            }

            if (counter.get(arr[i]) === k) {
                return arr[i];
            }

            if (i > j) {
                j = i + 1;
            } else {
                j++;
            }
        } else {
            const count = counter.get(arr[j]);
            if(count === undefined) counter.set(arr[j],1)
            else {
                counter.set(arr[j], count + 1);
            }
            if (counter.get(arr[j]) === k) {
                return arr[j];
            }

            if (j > i) {
                i = j + 1;
            } else {
                i++;
            }
        }
    }
    return max
}
