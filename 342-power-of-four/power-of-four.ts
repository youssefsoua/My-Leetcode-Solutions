function isPowerOfFour(n: number): boolean {
    if(n === 1 || n === 4) return true;
    if( n < 16) return false;
    return isPowerOfFour(n / 4);
};