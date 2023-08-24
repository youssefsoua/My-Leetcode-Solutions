function longestPalindrome(s: string): number {
    const charCount = new Map<string, number>()

    for(let i = 0; i<s.length; i++){
        const exist = charCount.get(s[i])

        if(exist !== undefined){
            charCount.delete(s[i])
        }else{
            charCount.set(s[i],1)
        }
    }
    return charCount.size ? s.length - charCount.size + 1 : s.length
};