function frequencySort(s: string): string {
    const counter = new Map<string, number>();

    for (const char of s) {
        counter.set(char, (counter.get(char) || 0) + 1);
    }

    const sortedByFreq = Array.from(counter.entries()).sort((a, b) => b[1] - a[1]);

    let result = "";

    for (const element of sortedByFreq) {
        result += element[0].repeat(element[1]);
    }

    return result;
};