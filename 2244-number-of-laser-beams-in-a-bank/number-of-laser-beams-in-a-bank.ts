function numberOfBeams(banks: string[]): number {
    const counts: number[] = [];

    for (const bank of banks) {
        let count: number = 0;

        for (const e of bank) {
            if (e === "1") count++;
        }

        if (count) counts.push(count);
    }

    if (counts.length < 2) return 0;

    let result: number = 0;

    for (let i = 1; i < counts.length; i++) {
        result += counts[i] * counts[i - 1];
    }

    return result;
}
