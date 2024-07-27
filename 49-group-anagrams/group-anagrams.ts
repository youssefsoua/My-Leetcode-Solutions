function groupAnagrams(strs: string[]): string[][] {
    const map = new Map<string, string[]>();

    for (const str of strs) {

        const counter = Array(26).fill(0);

        for (const s of str) {
            counter[s.charCodeAt(0) - 97]++;
        }

        const key = counter.join("-");

        const exist = map.get(key);

        if (exist) exist.push(str);
        else map.set(key, [str]);
    }

    return Array.from(map.values());
};