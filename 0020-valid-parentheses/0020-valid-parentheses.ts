function isValid(s: string): boolean {
    const brackets: Record<string, string> = {
        ")": "(",
        "}": "{",
        "]": "[",
    };
    const stack: string[] = [];

    for (let i = 0; i < s.length; i++) {
        if (brackets[s[i]]) {
            if (stack.length === 0 || stack.pop() !== brackets[s[i]]) {
                return false;
            }
        } else {
            stack.push(s[i]);
        }
    }

    return stack.length === 0;
}