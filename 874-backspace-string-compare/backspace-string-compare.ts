function backspaceCompare(s: string, t: string): boolean {
    return backspaceRemover(s) === backspaceRemover(t);
}

const backspaceRemover = (s: string): string => {
    let result: string = "";
    let index: number = s.length - 1;
    let counter: number = 0;

    while (index >= 0) {
        if (s[index] === "#") {
            counter++;
            index--;
        } else {
            if (counter > 0 && index >= 0) {
                index--;
                counter--;
            } else {
                result += s[index];
                index--;
            }
        }
    }
    return result;
};
