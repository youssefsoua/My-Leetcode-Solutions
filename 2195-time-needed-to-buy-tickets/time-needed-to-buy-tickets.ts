function timeRequiredToBuy(tickets: number[], k: number): number {
    const person: number = tickets[k];
    let totalCost: number = 0;

    for (let i = 0; i < tickets.length; i++) {
        if (i < k) {
            totalCost += Math.min(tickets[i], person);
        } else if (i === k) {
            totalCost += person;
        } else {
            totalCost += Math.min(tickets[i], person - 1);
        }
    }

    return totalCost;
}
