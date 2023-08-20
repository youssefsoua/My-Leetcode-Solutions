function isAnagram(s: string, t: string): boolean {
    if(s.length !== t.length) return false
    
    const source = new Array(26).fill(0)
    const target = new Array(26).fill(0)

    for(let i = 0; i<s.length; i++){
        source[s.charCodeAt(i)-97]++
        target[t.charCodeAt(i)-97]++
    }

    for(let i = 0; i<26; i++){
        if(source[i] != target[i]) return false
    }

    return true
};