function maximumGain(s: string, x: number, y: number): number {
    let n = s.length;
    let result = 0;
    let arr = s.split('');

    if (x > y) {
        result += removeStrAB(arr, x);
        result += removeStrBA(arr, y);
    } else {
        result += removeStrBA(arr, y);
        result += removeStrAB(arr, x);
    }

    return result;
}

function removeStrAB(s: string[], val: number): number {
    let n = s.length;
    let result = 0;
    const stack: string[] = [];

    for (let i = 0; i < n; i++) {
        if (s[i] === "b" && stack[stack.length - 1] === "a") {
            stack.pop();
            result += val;
        } else {
            stack.push(s[i]);
        }
    }

    s.length = 0;
    
    for (const char of stack) {
        s.push(char);
    }
    
    return result;
}

function removeStrBA(s: string[], val: number): number {
    let n = s.length;
    let result = 0;
    const stack: string[] = [];

    for (let i = 0; i < n; i++) {
        if (s[i] === "a" && stack[stack.length - 1] === "b") {
            stack.pop();
            result += val;
        } else {
            stack.push(s[i]);
        }
    }

    s.length = 0;

    for (const char of stack) {
        s.push(char);
    }

    return result;
}
