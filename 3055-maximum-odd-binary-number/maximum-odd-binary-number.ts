function maximumOddBinaryNumber(s: string): string {
    let odd: string = "";
    let result: string = "";

    for (const char of s) {
        if (!odd && char === "1") {
            odd += char;
        } else {
            if (char === "1") result = char + result;
            else result += char;
        }
    }

    return result + odd;
}
