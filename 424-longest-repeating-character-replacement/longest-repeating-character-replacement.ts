function characterReplacement(s: string, k: number): number {
    const counter = new Map<string, number>();
    let left: number = 0;
    let dominantCharCount: number = 0;
    let max: number = 0;

    for (let right = 0; right < s.length; right++) {
        const currentCount = (counter.get(s[right]) || 0) + 1;
        counter.set(s[right], currentCount);

        dominantCharCount = Math.max(dominantCharCount, currentCount);

        if (right - left + 1 - dominantCharCount > k) {
            counter.set(s[left], counter.get(s[left]) - 1);
            left++;
        }

        max = Math.max(max, right - left + 1);
    }

    return max;
}
