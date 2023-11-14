const letters: Record<string, string[]> = {
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"],
};

function letterCombinations(digits: string): string[] {
    const combinations: string[] = [];

    const getCombinations = (index: number, combination: string[]): void => {
        if (combination.length === digits.length)
            combinations.push(combination.join(""));
        if (combination.length < digits.length) {
            for (const letter of letters[digits[index]]) {
                combination.push(letter);
                getCombinations(index + 1, combination);
                combination.pop();
            }
        }
    };

    if (digits) getCombinations(0, []);

    return combinations;
}
