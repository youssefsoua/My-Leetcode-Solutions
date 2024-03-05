function minimumLength(s: string): number {
    let left: number = 0;
    let right: number = s.length - 1;

    while (left < right && s[left] === s[right]) {
        let current: string = s[left];

        while (left <= right && s[left] === current) {
            left++;
        }
        while (left <= right && s[right] === current) {
            right--;
        }

    }

    return right - left + 1;
};