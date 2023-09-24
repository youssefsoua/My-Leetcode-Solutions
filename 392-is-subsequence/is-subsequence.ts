function isSubsequence(s: string, t: string): boolean {
    if(s.length === 0) return true;
    
    let tIndex = 0;
    let sIndex = 0;

    while (tIndex < t.length) {
        
        if (s[sIndex] === t[tIndex]) {
            sIndex++;
        }

        if (sIndex === s.length) return true;

        tIndex++;
    }

    return false;
}
