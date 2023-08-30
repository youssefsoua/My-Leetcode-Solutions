function lengthOfLongestSubstring(s: string): number {
    const charSet = new Set<string>();
    let startIndex = 0;
    let maxLength = 0;

    for (let endIndex = 0; endIndex < s.length; endIndex++) {
        while (charSet.has(s[endIndex])) {
            charSet.delete(s[startIndex]);
            startIndex++;
        }
        charSet.add(s[endIndex]);
        maxLength = Math.max(maxLength, endIndex - startIndex + 1);
    }

    return maxLength;
}
