function isAnagram(s: string, t: string): boolean {
  if(s.length !== t.length) return false

    let map = new Map()

    for(let i = 0; i<s.length; i++){
        map.set(s[i], (map.get(s[i])||0)+1)
    }

    for(let i = 0; i<s.length; i++){
        const exist = map.get(t[i])
        if(exist === undefined || exist === 0) return false
        map.set(t[i], exist-1)
    }
    return true
};