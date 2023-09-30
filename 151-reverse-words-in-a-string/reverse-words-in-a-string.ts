function reverseWords(s: string): string {
    const result: string[] = [];
    let right = s.length - 1;
    let left = right;

    while (right >= 0) {
        while (right >= 0 && s[right] === ' ') {
            right--; // Skip trailing spaces
            left = right; // Reset the left pointer
        }

        while (left >= 0 && s[left] !== ' ') {
            left--; // Move the left pointer to find the beginning of a word
        }

        const word = s.slice(left + 1, right + 1);
        if (word) {
            result.push(word);
        }

        right = left; // Move the right pointer to the end of the next word
    }

    return result.join(' ');
}



// function reverseWords(s: string): string {
//     return s
//         .split(" ")
//         .filter(word => word.trim() !== "")
//         .reverse()
//         .join(" ");
// }


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
