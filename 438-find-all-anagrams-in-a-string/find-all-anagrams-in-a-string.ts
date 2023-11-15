function findAnagrams(s: string, p: string): number[] {
    const n: number = p.length;
    const counter = new Map<string, number>();

    for (const e of p) {
        counter.set(e, (counter.get(e) || 0) + 1);
    }

    const result: number[] = [];
    let right = 0;
    let left = 0;

    while (right < s.length) {
        const exist = counter.get(s[right]);
        if (exist !== undefined) {
            counter.set(s[right], exist - 1);
        } else {
            while (left <= right) {
                if (counter.has(s[left])) {
                    counter.set(s[left], (counter.get(s[left]) || 0) + 1);
                }
                left++;
            }
        }


        while (
            left < right &&
            (counter.get(s[right]) < 0 || right - left + 1 > n)
        ) {
            if (counter.has(s[left])) {
                counter.set(s[left], (counter.get(s[left]) || 0) + 1);
            }
            left++;
        }

        if (right - left + 1 === n) {
            result.push(left);
        }

        right++;
    }

    return result;
}
