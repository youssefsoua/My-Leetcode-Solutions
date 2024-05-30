function countTriplets(arr: number[]): number {
    const n = arr.length;
    let count = 0;
    const prefixXOR = [arr[0]];

    for (let i = 1; i < n; i++) {
        prefixXOR[i] = prefixXOR[i - 1] ^ arr[i];
    }

    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            for (let k = j; k < n; k++) {
                let a = prefixXOR[j];
                if (i > 0) a ^= prefixXOR[i - 1];
                let b = prefixXOR[k] ^ prefixXOR[j];

                if (a === b) count++;
            }
        }
    }

    return count;
};
