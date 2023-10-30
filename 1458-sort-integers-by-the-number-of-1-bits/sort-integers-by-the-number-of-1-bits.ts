function sortByBits(arr: number[]): number[] {
    const bitsSort = (num1: number, num2: number) => {
        
        const n1 = (num1.toString(2).match(/1/g) || []).length;
        const n2 = (num2.toString(2).match(/1/g) || []).length;

        if (n1 === n2) return num1 - num2;
        return n1 - n2;
    };

    return arr.sort(bitsSort);
}
