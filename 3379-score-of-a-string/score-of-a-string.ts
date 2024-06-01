function scoreOfString(s: string): number {
    let count = 0;

    for (let i = 1; i < s.length; i++) {
        count += Math.abs(s[i].charCodeAt(0) - s[i - 1].charCodeAt(0));
    }

    return count;
};