function maxLength(arr: string[]): number {
    const words: number[][] = [];
    let max: number = 0;
    const n: number = arr.length;

    for (const str of arr) {
        const word: number[] = new Array(26).fill(0);
        for (const char of str) {
            word[char.charCodeAt(0) - 97]++;
        }
        words.push(word);
    }

    const backtrack = (word: number[], index: number, sum: number) => {
        if (index < n) {
            for (let i = index; i < n; i++) {
                let isUnique: boolean = true;

                for (let j = 0; j < 26; j++) {
                    if (word[j] + words[i][j] > 1) {
                        isUnique = false;
                        break;
                    }
                }

                if (isUnique) {
                    sum += arr[i].length;
                    max = Math.max(max, sum);

                    for (let j = 0; j < 26; j++) {
                        word[j] += words[i][j];
                    }
                    backtrack(word, i + 1, sum);
                    sum -= arr[i].length;
                    for (let j = 0; j < 26; j++) {
                        word[j] -= words[i][j];
                    }
                }
                isUnique = true;
            }
        }
    };

    const word: number[] = new Array(26).fill(0);
    backtrack(word, 0, 0);

    return max;
}
