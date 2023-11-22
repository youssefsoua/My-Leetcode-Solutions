function isLongPressedName(name: string, typed: string): boolean {
    let i = 0;
    let j = 0;

    while (j < typed.length) {
        if (i < name.length && name[i] === typed[j]) {
            // Characters match, move both pointers
            i++;
            j++;
        } else if (j === 0 || typed[j] !== typed[j - 1]) {
            // If the current typed character is not the same as the previous
            // and we're not at the beginning, it's not a valid long-pressed character
            return false;
        } else {
            // Skip repeated characters in the typed string
            j++;
        }
    }

    // Ensure all characters in 'name' have been used
    return i === name.length;
}