function evalRPN(tokens: string[]): number {
    const stack: number[] = [];

    for (const token of tokens) {
        if (isNaN(parseInt(token))) {
            const num2 = stack.pop()!;
            const num1 = stack.pop()!;
            stack.push(applyOperator(token, num1, num2));
        } else {
            stack.push(parseInt(token));
        }
    }

    return stack[0];
}

function applyOperator(operator: string, num1: number, num2: number): number {
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return Math.trunc(num1 / num2);
        default:
            throw new Error("Invalid operator: " + operator);
    }
}
