function isIsomorphic(s: string, t: string): boolean {
    if (s === t) return true;
    const source = new Map<string, string>();
    const target = new Map<string, string>();

    for (let i = 0; i < s.length; i++) {
        const s_val = source.get(s[i]);
        const t_val = target.get(t[i]);

        if (!s_val && !t_val) {
            source.set(s[i], t[i]);
            target.set(t[i], s[i]);
        } else if (s_val !== t[i] || t_val !== s[i]) {
            return false;
        }
    }

    return true;
}