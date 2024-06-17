function judgeSquareSum(c: number): boolean {
    let i = 0;
    let j = Math.floor(Math.sqrt(c));

    while (i <= j) {
        const sum = i ** 2 + j ** 2;
        if (sum === c) return true;
        if (sum > c) {
            j--;
        } else {
            i++;
        }
    }

    return false;
};