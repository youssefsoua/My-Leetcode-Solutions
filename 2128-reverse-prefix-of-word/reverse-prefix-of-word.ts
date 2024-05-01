function reversePrefix(word: string, ch: string): string {
    const n = word.length;
    let i = 0;
    let result = "";

    while (i < n) {
        result = word[i] + result;
        if (word[i++] === ch) break;
    }

    if (i === n && word[n - 1] !== ch) return word;

    for (let j = i; j < n; j++) {
        result += word[j];
    }
    
    return result;
};