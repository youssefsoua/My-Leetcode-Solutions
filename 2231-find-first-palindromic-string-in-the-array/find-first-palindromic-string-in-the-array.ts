function firstPalindrome(words: string[]): string {
    for (const word of words) {
        if (isPalindrome(word)) return word;
    }
    return ""
};

function isPalindrome(word: string): boolean {
    let right = word.length - 1;
    let left = 0;

    while (left < right) {
        if (word[left++] !== word[right--]) return false;
    }

    return true;
};