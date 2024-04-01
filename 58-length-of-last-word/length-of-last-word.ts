function lengthOfLastWord(s: string) {
    let count: number = 0;
    let i: number = s.length - 1;

    while (i >= 0 && s[i] === " ") {
        i--;
    }

    while (i >= 0 && s[i] !== " ") {
        i--;
        count++;
    }

    return count;
}