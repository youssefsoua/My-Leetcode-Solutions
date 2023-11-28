function countCharacters(words: string[], chars: string): number {
    const charsCounter = new Map<string, number>()
    let result: number = 0
    
    for(const char of chars){
        charsCounter.set(char, (charsCounter.get(char)||0) + 1)
    }
    
    for(const word of words){
        if(word.length<=chars.length){
            const counter = new Map<string, number>()
            let i : number = 0
            
            while(i<word.length){
                const exist = charsCounter.get(word[i])
                
                if(!exist) break
                
                const current = counter.get(word[i]) || 0
                
                if(current + 1 > exist) break
                
                counter.set(word[i], current + 1)
                
                i++
            }
            
            if(i === word.length) result+=i
        }    
    }
        
    return result
};