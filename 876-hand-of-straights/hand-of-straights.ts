function isNStraightHand(hand: number[], groupSize: number): boolean {
    if (hand.length % groupSize !== 0) return false;

    let map = new Map();

    // Count the occurrences of each card
    for (let card of hand) {
        map.set(card, (map.get(card) || 0) + 1);
    }

    // Sort the unique cards
    let uniqueCards = Array.from(map.keys()).sort((a, b) => a - b);

    // Process the cards in sorted order
    for (let card of uniqueCards) {
        let count = map.get(card);
        if (count > 0) {
            // Try to form a group starting from the current card
            for (let i = 0; i < groupSize; i++) {
                let currentCard = card + i;
                if (!map.has(currentCard) || map.get(currentCard) < count) {
                    return false;
                }
                map.set(currentCard, map.get(currentCard) - count);
            }
        }
    }

    return true;
}
