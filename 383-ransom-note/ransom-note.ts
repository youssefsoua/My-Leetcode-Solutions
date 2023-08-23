function canConstruct(ransomNote: string, magazine: string): boolean {
    const ransomNoteMap = new Map<string,number>()

    for(let i = 0; i<ransomNote.length; i++){
        ransomNoteMap.set(ransomNote[i], (ransomNoteMap.get(ransomNote[i]) || 0) + 1)
    }

    for(let i = 0; i<magazine.length; i++){
        const exist: number | undefined = ransomNoteMap.get(magazine[i])

        if(exist !== undefined){
            if(exist>1)ransomNoteMap.set(magazine[i], exist-1)
            else ransomNoteMap.delete(magazine[i])
        }
        
        if(!ransomNoteMap.size) return true
    }

    return false
};