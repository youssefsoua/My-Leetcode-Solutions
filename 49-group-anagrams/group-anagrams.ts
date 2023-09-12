function groupAnagrams(strs: string[]): string[][] {
    const groups = new Map<string, string[]>();
    
    for (const str of strs) {
        const chars: number[] = new Array(26).fill(0);
        for (const char of str) {
            chars[char.charCodeAt(0) - 97]++;
        }

        const key = chars.toString();
        const exist = groups.get(key);

        if (exist !== undefined) {
            exist.push(str);
            groups.set(key, exist);
        } else {
            groups.set(key, [str]);
        }
    }

    return Array.from(groups.values());
}
