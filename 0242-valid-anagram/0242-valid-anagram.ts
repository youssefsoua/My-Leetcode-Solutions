function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;

    const charCount = new Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
        charCount[s[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
        charCount[t[i].charCodeAt(0) - 'a'.charCodeAt(0)]--;
    }

    for (const count of charCount) {
        if (count !== 0) return false;
    }

    return true;
}
