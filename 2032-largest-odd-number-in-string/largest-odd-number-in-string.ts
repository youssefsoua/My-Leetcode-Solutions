function largestOddNumber(num: string): string {
    for (let i = num.length; i >= 0; i--) {
        if (+num[i] % 2) return num.slice(0, i + 1);
    }

    return "";
}
