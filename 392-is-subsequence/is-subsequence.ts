function isSubsequence(s: string, t: string): boolean {
    if (s.length === 0) {
        return true;
    }

    let sIndex = 0;

    for (let tIndex = 0; tIndex < t.length; tIndex++) {
        if (s[sIndex] === t[tIndex]) {
            sIndex++;
        }

        if (sIndex === s.length) {
            return true;
        }
    }

    return false;
}
