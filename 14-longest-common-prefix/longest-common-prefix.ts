function longestCommonPrefix(strs: string[]): string {
    const dictionary = {};
    let result = "";

    for (const str of strs) {
        let current = dictionary;
        for (const char of str) {
            if (!current[char]) current[char] = { count: 0 };
            current[char].count++;
            current = current[char];
        }
    }

    let current = dictionary;
    for (const char of strs[0]) {
        if (current[char].count !== strs.length) break;
        result += char;
        current = current[char];
    }

    return result;
}
