function minRemoveToMakeValid(s: string): string {
    const stack: string[] = [];
    let result: string[] = [];

    for (const e of s) {
        if (e === "(") {
            result.push(e);
            stack.push(e);
        } else if (stack.length && e === ")") {
            stack.pop();
            result.push(e);
        } else if (e !== "(" && e !== ")") {
            result.push(e);
        }
    }

    let i = result.length - 1;

    while (stack.length > 0) {
        if (result[i] === stack[stack.length - 1]) {
            stack.pop();
            result[i] = "";
        }
        i--;
    }

    return result.join("");
}
