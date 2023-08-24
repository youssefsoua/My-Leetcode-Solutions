function longestPalindrome(s: string): number {
    const charCount = new Map<string, number>();

    for (const char of s) {
        charCount.has(char) ? charCount.delete(char) : charCount.set(char, 1);
    }

    return s.length - (charCount.size > 0 ? charCount.size - 1 : 0);
}
