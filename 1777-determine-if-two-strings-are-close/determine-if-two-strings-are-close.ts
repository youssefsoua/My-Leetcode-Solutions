function closeStrings(word1: string, word2: string): boolean {
    if (word1.length !== word2.length) return false;
    const counter1 = new Map<string, number>();
    const counter2 = new Map<string, number>();

    for (let i = 0; i < word1.length; i++) {
        counter1.set(word1[i], (counter1.get(word1[i]) || 0) + 1);
        counter2.set(word2[i], (counter2.get(word2[i]) || 0) + 1);
    }

    if (counter1.size !== counter2.size) return false;

    const count1 = Array.from(counter1.entries()).sort((a, b) => a[1] - b[1]);
    const count2 = Array.from(counter2.entries()).sort((a, b) => a[1] - b[1]);

    for (let i = 0; i < count1.length; i++) {
        if (count1[i][1] !== count2[i][1] || !counter1.get(count2[i][0]) || !counter2.get(count1[i][0])) return false;
    }

    return true;
};