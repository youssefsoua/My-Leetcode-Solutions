function mergeAlternately(word1: string, word2: string): string {
    let word1Index = 0;
    let word2Index = 0;
    let result = "";

    while (word1Index < word1.length && word2Index < word2.length) {
        result += word1[word1Index++] + word2[word2Index++];
    }
    while (word1Index < word1.length) {
        result += word1[word1Index++];
    }
    while (word2Index < word2.length) {
        result += word2[word2Index++];
    }

    return result;
}
