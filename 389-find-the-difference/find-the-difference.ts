function findTheDifference(str1: string, str2: string): string {
    const counter = new Map<string, number>();

    for (const char of str1) {
        counter.set(char, (counter.get(char) || 0) + 1);
    }

    for (const char of str2) {
        const exist = counter.get(char);
        if (!exist) return char;
        counter.set(char, exist - 1);
    }
}


/*

function findTheDifference(str1: string, str2: string): string {
    const n1 = str1.length;
    const n2 = str2.length;
    let x = 0;

    for (let i = 0; i < n1; i++) {
        x ^= str1.charCodeAt(i);
    }

    for (let i = 0; i < n2; i++) {
        x ^= str2.charCodeAt(i);
    }

    return String.fromCharCode(x);
};


 */