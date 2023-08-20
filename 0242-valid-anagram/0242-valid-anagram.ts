function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false;
    }

    const charCountMap = new Map<string, number>();

    for (const char of s) {
        charCountMap.set(char, (charCountMap.get(char) || 0) + 1);
    }

    for (const char of t) {
        const charCount = charCountMap.get(char);
        if (charCount === undefined || charCount === 0) {
            return false;
        }
        charCountMap.set(char, charCount - 1);
    }

    return true;
}
