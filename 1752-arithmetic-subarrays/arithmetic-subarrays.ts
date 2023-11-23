function checkArithmeticSubarrays(
    nums: number[],
    l: number[],
    r: number[],
): boolean[] {
    
    const result: boolean[] = [];

    for (let i = 0; i < l.length; i++) {
        const temp: number[] = nums.slice(l[i], r[i] + 1).sort((a, b) => a - b);
        let index = 1;
        const diff = temp[1] - temp[0];

        while (index < temp.length) {
            if (temp[index] - temp[index - 1] !== diff) {
                result.push(false);
                break;
            }
            if (index === temp.length - 1) result.push(true);

            index++;
        }
    }

    return result;
}
