function minWindow(s: string, t: string): string {
    const targetCharCount = new Map<string, number>();
    const currentWindowCount = new Map<string, number>();
    let matchedCount: number = 0;
    let leftPointer: number = 0;
    let firstIndex: number = 0;
    let lastIndex: number = Infinity;

    // Populate the target character count map
    for (const char of t) {
        targetCharCount.set(char, (targetCharCount.get(char) || 0) + 1);
    }

    for (let rightPointer = 0; rightPointer < s.length; rightPointer++) {
        // Update current window character count
        if (targetCharCount.has(s[rightPointer])) {
            const currentCharCount: number = (currentWindowCount.get(s[rightPointer]) || 0) + 1;
            currentWindowCount.set(s[rightPointer], currentCharCount);

            // Check if the character is fully matched
            if (targetCharCount.get(s[rightPointer]) >= currentCharCount) {
                matchedCount++;
            }
        }

        // Try to minimize the window by moving the left pointer
        while (matchedCount === t.length) {
            let currentCount = currentWindowCount.get(s[leftPointer]);

            if (currentCount) {
                // Update matched count and window indices
                if (currentCount === targetCharCount.get(s[leftPointer])) {
                    matchedCount--;
                    if (rightPointer - leftPointer < lastIndex - firstIndex) {
                        firstIndex = leftPointer;
                        lastIndex = rightPointer;
                    }
                }

                // Move the left pointer
                currentWindowCount.set(s[leftPointer], currentCount - 1);
            }

            leftPointer++;
        }
    }

    return lastIndex === Infinity ? "" : s.slice(firstIndex, lastIndex + 1);
}
