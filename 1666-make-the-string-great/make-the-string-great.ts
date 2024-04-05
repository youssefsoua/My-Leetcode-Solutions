function makeGood(s: string): string {
    const stack: string[] = [];

    for (const e of s) {
        stack.push(e);
        while (
            stack.length > 1 &&
            stack[stack.length - 1] !== stack[stack.length - 2] &&
            stack[stack.length - 1].toLowerCase() ===
                stack[stack.length - 2].toLowerCase()
        ) {
            stack.pop();
            stack.pop();
        }
    }
    
    return stack.join("");
}
