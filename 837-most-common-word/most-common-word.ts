function mostCommonWord(paragraph: string, banned: string[]): string {
    const words: string[] = paragraph
        .toLowerCase()
        .replaceAll(/[^a-z \s]/gi, " ")
        .split(/\s+/g);
    const counter = new Map<string, number>();
    const bannedWords = new Set(banned.map(e=>e.toLowerCase()));
    let max = 0;
    let common: string = "";

    for (const word of words) {
        if (!bannedWords.has(word)) {
            const count = counter.get(word) || 0;

            if (count + 1 > max) {
                max = count + 1;
                common = word;
            }

            counter.set(word, count + 1);
        }
    }

    return common;
}
