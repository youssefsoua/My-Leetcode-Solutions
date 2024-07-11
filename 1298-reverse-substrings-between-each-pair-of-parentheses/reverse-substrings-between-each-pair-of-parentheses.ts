function reverseParentheses(s: string): string {
    const stack: string[] = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] !== ")") {
            stack.push(s[i]);
        } else {
            const word: string[] = []
            
            while (stack[stack.length - 1] !== "(") {
                word.push(stack.pop());
            }

            stack.pop();

            for (let j = 0; j < word.length; j++) {
                stack.push(word[j]);
            }
        }
    }

    return stack.join('');
};