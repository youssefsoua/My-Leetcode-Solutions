function romanToInt(s: string): number {
    const numbers = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    const n = s.length;

    if (n === 1) return numbers[s];

    let result = 0;

    for (let i = n - 1; i >= 0; i--) {
        if (i > 0 && s[i] === "V" && s[i - 1] === "I") {
            result += 4;
            i--;
        } else if (i > 0 && s[i] === "L" && s[i - 1] === "X") {
            result += 40;
            i--;
        } else if (i > 0 && s[i] === "D" && s[i - 1] === "C") {
            result += 400;
            i--;
        } else if (i > 0 && s[i] === "X" && s[i - 1] === "I") {
            result += 9;
            i--;
        } else if (i > 0 && s[i] === "C" && s[i - 1] === "X") {
            result += 90;
            i--;
        } else if (i > 0 && s[i] === "M" && s[i - 1] === "C") {
            result += 900;
            i--;
        } else {
            result += numbers[s[i]];
        }
    }

    return result;
}
