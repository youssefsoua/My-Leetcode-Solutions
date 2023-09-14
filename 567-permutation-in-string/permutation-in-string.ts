function checkInclusion(s1: string, s2: string): boolean {
    if (s1.length > s2.length) return false;

    const permutations = new Map<string, number>();

    for (const char of s1) {
        permutations.set(char, (permutations.get(char) || 0) + 1);
    }

    let right: number = 0;
    let left: number = 0;

    while (right < s2.length) {
        const exist = permutations.get(s2[right]);

        if (exist !== undefined) {
            if (exist - 1 === 0) permutations.delete(s2[right]);
            else permutations.set(s2[right], exist - 1);
            right++;
        } else {
            permutations.set(s2[left], (permutations.get(s2[left]) || 0) + 1);
            left++;
        }

        if (right - left === s1.length) return true;
    }

    return false;
}
