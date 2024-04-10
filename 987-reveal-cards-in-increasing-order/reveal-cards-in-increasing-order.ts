function deckRevealedIncreasing(deck: number[]): number[] {
    if (deck.length < 3) return deck;

    deck.sort((a, b) => b - a);

    const result: number[] = [deck[0], deck[1]];

    for (let i = 2; i < deck.length; i++) {
        result.push(result.shift());
        result.push(deck[i]);
    }

    return result.reverse();
};