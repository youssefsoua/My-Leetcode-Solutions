function compareVersion(version1: string, version2: string): number {
    const v1 = version1.split(".");
    const v2 = version2.split(".");
    const n = v1.length > v2.length ? v1.length : v2.length;

    for (let i = 0; i < n; i++) {
        const n1 = v1[i] || 0;
        const n2 = v2[i] || 0;

        if (+n1 > +n2) return 1;
        if (+n1 < +n2) return -1;
    }

    return 0;
};