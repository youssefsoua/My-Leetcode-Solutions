function isPalindrome(x: number): boolean {
    if (x < 0) return false;
    const num = x.toString();
    const n = num.length;

    for (let i = 0; i < n / 2; i++) {
        if (num[i] != num[n - 1 - i]) return false;
    }

    return true;
};