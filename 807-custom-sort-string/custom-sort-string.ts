function customSortString(order: string, s: string): string {
    const orders = new Map<string, number>();

    for (let i = 0; i < order.length; i++) {
        orders.set(order[i], i);
    }

    return s.split("").sort((a, b) => {
        const p1 = orders.get(a) || -1;
        const p2 = orders.get(b) || -1;
        return p1 - p2;
    }).join("");
};