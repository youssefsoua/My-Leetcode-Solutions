function minWindow(s: string, t: string): string {
    const targetCharCounter = new Map<string, number>();
    const counter = new Map<string, number>();
    let matchedCount: number = 0;
    let left: number = 0;
    let firstIndex: number = 0;
    let lastIndex: number = Infinity;

    for (const char of t) {
        targetCharCounter.set(char, (targetCharCounter.get(char) || 0) + 1);
    }

    for (let right = 0; right < s.length; right++) {
        if (targetCharCounter.has(s[right])) {
            const currentCharCount: number = (counter.get(s[right]) || 0) + 1;
            counter.set(s[right], currentCharCount);

            if (targetCharCounter.get(s[right]) >= currentCharCount)
                matchedCount++;
        }

        while (matchedCount === t.length) {
            let current = counter.get(s[left]);

            if (current) {
                if (current === targetCharCounter.get(s[left])) {
                    matchedCount--;
                    if (right - left < lastIndex - firstIndex) {
                        firstIndex = left;
                        lastIndex = right;
                    }
                }
                counter.set(s[left], current - 1);
            }
            left++;
        }
    }

    return lastIndex === Infinity ? "" : s.slice(firstIndex, lastIndex + 1);
}
