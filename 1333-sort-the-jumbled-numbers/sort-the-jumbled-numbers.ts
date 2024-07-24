function sortJumbled(mapping: number[], nums: number[]): number[] {
    const mappedValues: number[][] = [];

    for (const num of nums) {
        let val = "";
        for (const s of num.toString()) {
            val += mapping[+s];
        }
        mappedValues.push([num, +val]);
    }

    mappedValues.sort((a, b) => a[1] - b[1]);

    return mappedValues.map(e => e[0]);
};