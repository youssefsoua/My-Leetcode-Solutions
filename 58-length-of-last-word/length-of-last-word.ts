function lengthOfLastWord(s) {
    let count = 0;
    let i = s.length - 1;

    while (i >= 0 && s[i] === " ") {
        i--;
    }
    while (i >= 0 && s[i] !== " ") {
        i--;
        count++;
    }
    return count;
}
