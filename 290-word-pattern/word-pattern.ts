function wordPattern(pattern: string, s: string): boolean {
    const words: string[] = s.split(" ");

    if (words.length !== pattern.length) {
        return false;
    }

    const patternToWord = new Map<string, string>();
    const wordToPattern = new Map<string, string>();

    for (let i = 0; i < words.length; i++) {
        const p = pattern[i];
        const w = words[i];

        if (
            (patternToWord.has(p) && patternToWord.get(p) !== w) ||
            (wordToPattern.has(w) && wordToPattern.get(w) !== p)
        ) {
            return false;
        }

        patternToWord.set(p, w);
        wordToPattern.set(w, p);
    }

    return true;
}
