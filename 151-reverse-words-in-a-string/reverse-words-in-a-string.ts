function reverseWords(s: string): string {
    return s
        .split(" ")
        .filter(word => word.trim() !== "")
        .reverse()
        .join(" ");
}


/*
function reverseWords(s: string): string {
    const words: string[] = s.split(" ");
    let result: string = "";

    for (let i = words.length - 1; i >= 0; i--) {
        const word = words[i].trim();
        if (word) result = result + word + " ";
    }

    return result.trim();
}
*/
