function isPalindrome(s: string): boolean {
    const alphanumeric = /[a-z0-9]/i;
    let start = 0;
    let end = s.length - 1;

    while (start < end) {
        while (!alphanumeric.test(s[start]) && start < end) {
            start++;
        }
        while (!alphanumeric.test(s[end]) && start < end) {
            end--;
        }
        if (s[start].toLowerCase() !== s[end].toLowerCase()) {
            return false;
        }
        start++;
        end--;
    }
    return true;
}
