function halvesAreAlike(s: string): boolean {
    const vowels = {
        a: "a",
        e: "e",
        i: "i",
        o: "o",
        u: "u",
    };

    let left: number = 0;
    let right: number = s.length - 1;

    let leftCount: number = 0;
    let rightCount: number = 0;

    while (left < right) {
        if (s[left].toLowerCase() in vowels) leftCount++;
        if (s[right].toLowerCase() in vowels) rightCount++;
        
        left++;
        right--;
    }

    return leftCount === rightCount;
}
