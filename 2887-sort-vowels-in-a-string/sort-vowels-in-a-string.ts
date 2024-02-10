function sortVowels(s: string): string {
    const set = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])
    const arr = s.split("")
    const vowels = []

    for (const e of s) {
        if (set.has(e)) vowels.push(e)
    }

    vowels.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))

    let index = 0

    for (let i = 0; i < arr.length; i++) {
        if (set.has(arr[i])) arr[i] = vowels[index++]

    }

    return arr.join("")
};