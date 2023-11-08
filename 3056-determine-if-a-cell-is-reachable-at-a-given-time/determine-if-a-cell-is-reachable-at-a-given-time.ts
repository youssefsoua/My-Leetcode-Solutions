function isReachableAtTime(sx: number, sy: number, fx: number, fy: number, t: number): boolean {
    const x = Math.abs(sx-fx)
    const y = Math.abs(sy-fy)
    if(!x && !y && t!==1) return true
    if(!t && x+y || !x && !y && t<=1) return false
    const minDistance = x>y ? x:y
    console.log(x,y,minDistance)
    return minDistance<=t
};